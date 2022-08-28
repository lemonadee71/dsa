const LinkedList = require('.');

describe('LinkedList', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList(0);
  });

  it('append: adds a value at the end of the list', () => {
    list.append(1).append(2);

    expect(list.toString()).toBe('( 0 ) -> ( 1 ) -> ( 2 )');
  });

  it('prepend: adds a value at the start of the list', () => {
    list.prepend(-1);

    expect(list.toString()).toBe('( -1 ) -> ( 0 )');
  });

  it('size: returns the size of the list', () => {
    list.prepend(-1).append(1).append(2);

    expect(list.size).toBe(4);
  });

  it('head: returns the head node', () => {
    list.append(1).prepend(2);

    expect(list.head.value).toBe(2);
  });

  it('tail: returns the tail node', () => {
    list.append(1).prepend(2);

    expect(list.tail.value).toBe(1);
  });

  it('pop: removes the last value', () => {
    list.prepend(-1).append(1).pop().append(3);

    expect(list.toString()).toBe('( -1 ) -> ( 0 ) -> ( 3 )');
  });

  it('shift: removes the first value', () => {
    list.prepend(-1).append(1).append(3).shift();

    expect(list.toString()).toBe('( 0 ) -> ( 1 ) -> ( 3 )');
  });

  it('at: get value at a certain index', () => {
    list.prepend(-1).append(1).append(3).append(2);

    expect(list.at(0).value).toBe(-1);
    expect(list.at(3).value).toBe(3);
    expect(list.at(4).value).toBe(2);
    expect(list.at(10)).toBe(null);
  });

  it('find: get index of a certain value', () => {
    list.prepend(-1).append(1).append(3).append(2);

    expect(list.find(3)).toBe(3);
    expect(list.find(2)).toBe(4);
  });

  it('contains: checks if value is in the list', () => {
    list.prepend(-1).append(1).append(3).append(2);

    expect(list.contains(0)).toBe(true);
    expect(list.contains(2)).toBe(true);
    expect(list.contains(4)).toBe(false);
  });

  it('insertAt: insert value at a specific index', () => {
    list.prepend(-1).append(1).append(2).insertAt(3, 1);

    expect(list.toString()).toBe('( -1 ) -> ( 3 ) -> ( 0 ) -> ( 1 ) -> ( 2 )');
  });

  it('removeAt: remove value at a specific index', () => {
    list.prepend(-1).append(1).append(2).removeAt(1);

    expect(list.toString()).toBe('( -1 ) -> ( 1 ) -> ( 2 )');
  });
});
