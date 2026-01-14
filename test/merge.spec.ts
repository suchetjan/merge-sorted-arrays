import { merge } from '../src/merge';

describe('Merge Sorted Arrays', () => {
  it('should merge three arrays into a single ascending sorted array', () => {
    const collection_1 = [10, 8, 5, 2]; // max to min
    const collection_2 = [1, 4, 9];    // min to max
    const collection_3 = [3, 6, 7];    // min to max

    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it('should handle arrays of different lengths', () => {
    const c1 = [5, 1];
    const c2 = [2];
    const c3 = [0, 3, 4, 6];
    
    expect(merge(c1, c2, c3)).toEqual([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should handle empty arrays', () => {
    expect(merge([], [1, 2], [])).toEqual([1, 2]);
  });
});