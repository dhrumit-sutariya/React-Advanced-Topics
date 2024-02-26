function Encoding() {
  const url = "https://www.google.com/?name=dhrumit";
  const encodedUrl = encodeURIComponent(url);
  const decodedUrl = decodeURIComponent(encodedUrl);
  return (
    <div>
      <hr />
      <h1>Encoding</h1>
      <p>Original URL :- {url}</p>
      <p>Encoded URL :- {encodedUrl}</p>
      <p>Decoded URL :- {decodedUrl}</p>
    </div>
  );
}

export default Encoding;
