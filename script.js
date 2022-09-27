function submitForm() {
    var inp1 = document.getElementById("inp1").value;
    var inp2 = document.getElementById("inp2").value;
    var inp3 = document.getElementById("inp3").value;
    var inp4 = document.getElementById("inp4").value;
    var inp5 = document.getElementById("inp5").value;
    var inp6 = document.getElementById("inp6").value;
    var inp7 = document.getElementById("inp7").value;
    var inp8 = document.getElementById("inp8").value;
    var inp9 = document.getElementById("inp9").value;
    var inp10 = document.getElementById("inp10").value;
    var inp11 = document.getElementById("inp11").value;
    var inp12 = document.getElementById("inp12").value;
    
    // Melakukan proses validasi
    var huruf = /^[A-Za-z]+$/;
    var angka = /^[0-9]*$/;
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (inp1 == '' || inp2 == '' || inp3 == '' || inp4 == '' || inp5 == '' || inp6 == '' || inp7 == '' ||
        inp8 == '' || inp9 == '' || inp10 == '' || inp11 == '' || inp12 == '') {
        alert("Masih terdapat data yang kosong.");
    }

    else if (!letters.test(inp1) || !huruf.test(inp2) || !huruf.test(inp3) || !huruf.test(inp5)
            || !huruf.test(inp8) || !huruf.test(inp9) || !huruf.test(inp10) || !huruf.test(inp11))  {
        alert("Beberapa masukan hanya boleh alfabet.");
    }

    else if (!angka.test(inp4) || !angka.test(inp6) || !angka.test(inp3) || !angka.test(inp5)
            || !angka.test(inp12))  {
        alert("Beberapa masukan hanya boleh angka.");
    }

    else if (!email.test(inp7) || !email.test(inp13)) {
        alert("Email tidak valid");
    }

    else {
        alert("Form berhasil dikumpulkan!");
    }
    
}