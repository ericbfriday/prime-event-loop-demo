export class Callstack<T> {
	constructor (...items: T[]) {
		this._contents = [ ...items ];
	}
	private _contents = Array<T>();
	public push(...items: T[]): number {
		return this._contents.push(...items);
	}
	public pop(): T {
		return this._contents.pop();
	}
	public all(): T[] {
		return this._contents;
	}

}