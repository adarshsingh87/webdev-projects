var qr = new QRCode(
	document.getElementById('qr-code'),
	"https://github.com/adarshsingh87"
);

function generateQR() {
  const value = document.getElementById('qr-value').value;
	document.getElementById('qr-code').classList.add('qr-code-reveal');
	qr.clear();
	qr.makeCode(value);
}
