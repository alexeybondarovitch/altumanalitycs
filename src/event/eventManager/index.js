import { saveEvents } from "@services/eventService";
import { isSafePositiveInteger } from "@utils/type";
import { hashCode } from "@utils/hash";
import { getDomElementString } from "@utils/dom";
import { InitializationError } from "@errors";
import { EventFactory } from "../eventFactory";
import { DEFAULT_EVENTS } from "../const";
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
    this._initEvents();
  }

  add({ event, count = 1, groups, data, time }) {
    const eventObj = EventFactory.createEvent({
      userId: this._userId,
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
  }

  flush() {
    saveEvents(this._buffer, this._productId);
    this._buffer = [];
  }

  dispose() {
    this.flush();
    window.removeEventListener("beforeunload", this._handleWindowUnload);
    document.removeEventListener("click", this._handleElementClick);
  }

  _initEvents() {
    window.addEventListener("beforeunload", this._handleWindowUnload, true);
    document.addEventListener("click", this._handleElementClick, true);
  }

  _handleWindowUnload = () => {
    this.add({ event: DEFAULT_EVENTS.SESSION_END, count: 1 });
    saveEvents(this._buffer, this._productId, true);
  }

  _handleElementClick = e => {
    const hashStr = getDomElementString(e.target);
    this.add({ event: hashCode(hashStr).toString(), count: 1, groups:['click'] });
  }
}
