function hesabla() {
    var kreditMeblegi = parseFloat(document.getElementById("kreditMeblegi").value);
    var faizDerecesi = parseFloat(document.getElementById("faizDerecesi").value);
    var kreditMuddeti = parseFloat(document.getElementById("kreditMuddeti").value);

    if (isNaN(kreditMeblegi) || isNaN(faizDerecesi) || isNaN(kreditMuddeti)) {
        alert("Zehmet olmasa düzgün sayı daxil edin.");
        return;
    }

    var ayliqFaiz = (faizDerecesi / 100) / 12;

    var ayliqOdenis = (kreditMeblegi * ayliqFaiz) / (1 - Math.pow(1 + ayliqFaiz, -kreditMuddeti));
    var umumiOdenilecekMebleg = ayliqOdenis * kreditMuddeti;
    var odenilmisUmumiFaiz = umumiOdenilecekMebleg - kreditMeblegi;

    document.getElementById("texminiOdenis").textContent = ayliqOdenis.toFixed(2);
    document.getElementById("umumiOdenilecekMebleg").textContent = umumiOdenilecekMebleg.toFixed(2);
    document.getElementById("odenilmisUmumiFaiz").textContent = odenilmisUmumiFaiz.toFixed(2);
}