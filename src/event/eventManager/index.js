import { saveEvents } from "@services/eventService";
import { isSafePositiveInteger } from "@utils/type";
import { InitializationError } from "@errors";
import { EventFactory } from "../eventFactory";
import { BUFFER_SIZE } from "./const";

export class EventManager {
  constructor(productId, userId, { bufferSize = BUFFER_SIZE }) {
    this._buffer = [];
    if (!isSafePositiveInteger(bufferSize)) {
      throw new InitializationError(
        "Wrong options were provided during initialization."
      );
    }
    this._bufferSize = bufferSize;
    this._productId = productId;
    this._userId = userId;
    window.addEventListener("beforeunload", this._handleWindowUnload, false);
  }

  add({ event, userId, groups, count, data, time }) {
    const eventObj = EventFactory.createEvent({
      userId: userId || this._userId,
      event,
      groups,
      count,
      data,
      time
    });

    if (eventObj) {
      this._buffer.push(eventObj);
    }

    if (this._buffer.length === this._bufferSize) {
      this.flush();
    }
  };

  flush() {
    saveEvents(this._buffer);
    this._buffer = [];
  };

  dispose() {
    this.flush();
    window.removeEventListener("beforeunload", this._handleWindowUnload);
  }

  _handleWindowUnload() {
    saveEvents(this._buffer, true);
  };
}
