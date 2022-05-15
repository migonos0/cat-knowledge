export interface Action<Type, Payload> {
    type: Type;
    payload?: Partial<Payload>;
}
