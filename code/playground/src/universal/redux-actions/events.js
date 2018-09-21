export const EVENT_ENTITY_EVENTS_FETCHING_STARTED = "EVENT_ENTITY_EVENTS_FETCHING_STARTED";
export const EVENT_ENTITY_EVENTS_FETCHING_SUCCEEDED = "EVENT_ENTITY_EVENTS_FETCHING_SUCCEEDED";
export const EVENT_ENTITY_EVENTS_FETCHING_ERRORED = "EVENT_ENTITY_EVENTS_FETCHING_ERRORED";

export const startedFetchingEntityEventsEvent = () => ({ type: EVENT_ENTITY_EVENTS_FETCHING_STARTED });

export const succeededFetchingEntityEventsEvent = (json) => ({ type: EVENT_ENTITY_EVENTS_FETCHING_SUCCEEDED, json: json });
