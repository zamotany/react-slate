import alignText from '../alignText';

describe('utils/alignText', () => {
  it('should align text to the left', () => {
    expect(alignText('text   ', { align: 'left' })).toEqual('text   ');
  });

  it('should align text to the right', () => {
    expect(alignText('text   ', { align: 'right' })).toEqual('   text');
    expect(alignText('text', { align: 'right' })).toEqual('text');
  });

  it('should center text', () => {
    expect(alignText('text    ', { align: 'center' })).toEqual('  text  ');
    expect(alignText('text   ', { align: 'center' })).toEqual('  text ');
    expect(alignText('txt    ', { align: 'center' })).toEqual('  txt  ');
    expect(alignText('txt   ', { align: 'center' })).toEqual('  txt ');
    expect(alignText('text', { align: 'center' })).toEqual('text');
  });
});
