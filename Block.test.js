const Block = require('./Block');

describe('Block', () => {
  const timestamp = 'a date';
  const lastHash = 'Some last hash';
  const hash = 'a hash';
  const data = ['Hello', 'World'];

  const block = new Block({
    timestamp,
    lastHash,
    hash,
    data,
  });

  it('has correct properties of timestamp, lastHash, hash, data', () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });
});
