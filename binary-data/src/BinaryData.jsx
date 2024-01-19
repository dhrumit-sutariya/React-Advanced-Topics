function BinaryData() {
  let arrayBuffer = new ArrayBuffer(8);
  let dataview1 = new DataView(arrayBuffer);

  dataview1.setUint8(0, 101);
  dataview1.setUint16(2, 102);

  let Bufferlength = arrayBuffer.byteLength;
  let arr = [];
  for (let i = 0; i < Bufferlength; i++) {
    arr.push(dataview1.getInt8(i) + ",");
  }
  return (
    <>
      <h1>Playing with Binary Data</h1>
      <p>Length of the Buffer : - {Bufferlength} bytes</p>
      <p>Manipulating data to buffer : - {arr}</p>
    </>
  );
}

export default BinaryData;
