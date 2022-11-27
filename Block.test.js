const Block = require('./Block');
const { GENESIS_DATA } = require('./config');

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

  describe('genesis()', () => {
    const genesisBlock = Block.genesis();

    it('returns a Block instance', () => {
      expect(genesisBlock instanceof Block).toBe(true);
    });

    it('returns the correct genesis data', () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });
});
