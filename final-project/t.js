function pr() {
    var divContents = document.getElementById("c").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body > <h1>shafiul islam <br>it20053<br>shifat ullah <br>it20054<br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}