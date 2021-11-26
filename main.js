// Dit is de script voor Nederlands/Engels:
const NL = 0;
const UK = 1;

var labels = [
    {
        //Nederlands
        aanhef: "aanhef",
        naam: "naam",
        achternaam: "achternaam",
        heer:"heer",
        vrouw:"mevrouw",
        beroep:"profession",
        anders: "anders",
        adresLabel: "Adres",
        achternaamLabel: "Achternaam:",
        beroepLabel: "Beroep:",
        postcodeLabel: "Postcode",
        NationaliteitLabel: "Nationaliteit",
        woonplaats: "Woonplaats",
        voornaam: "Naam",
        verjaardaglabel: "Verjaardag",
        
    },
    {
        //Engels
        verjaardaglabel: "Birthday",
        taal: "language",
        label: "Birthday",
        Gegevens: "Fill in your data",
        aanhef: "salution",
        beroepLabel: "Profession",
        NationaliteitLabel: "nationality",
        voornaam: "First Name",
        adresLabel: "Adress",
        postcodeLabel: "Zipcode",
        achternaam: "Achternaam",
        heer:"male",
        vrouw:"female",
        anders: "other",
        adres:"adress",
        woonplaats:"residence",
        Nationaliteit:"Nationality",
        Geboortedatum:"Birthday"
    },
];

$(document).ready(function() {
 
    $("#languageNL").change(function(){
        if($(this).val()){
                setLanguage(NL);
        }
        console.log("nl");
    });
  
    $("#languageUK").change(function(){
        if($(this).val()){
            setLanguage(UK);
        }
        console.log("uk");
    });

    //console.log("ga sumbit koppelen");
    $("#myform").submit(function(event) {

        console.log("submit");
        var naam = $('#naam').val();
        var achternaam = $('#achternaam').val();
        var adres = $('#adres').val();
        var plaats = $('#plaats').val();
        var postcode = $('#postcode').val();
        var nationaliteit = $('#Nationaliteit').val();
        var beroep = $('#beroep').val();
        // verbergt fout bericht 
        $('.foutbericht').hide();
        var errorCount = 0;

        if(!checkUsername(naam)){    
            $('#foutnaam').show();    
            errorCount++;
        }

        if(checksirname(achternaam) == false){    
            console.log("Gecheckt: " + achternaam);
            $('#foutachternaam').show(); 
            errorCount++;
        }

        if(checkAdress(adres) == false){    
            $('#foutadres').show();     
            errorCount++;
        }

        if(CheckPlace(plaats) == false){    
            $('#foutplaats').show(); 
            errorCount++;
        }
        
        if(CheckZipcode(postcode) == false){    
            $('#foutpostcode').show();     
            errorCount++;
        }
        
        if(CheckNat(nationaliteit) == false){    
            $('#foutnationaliteit').show();     
            errorCount++;
        } 

        if(CheckNat(beroep) == false){    
            $('#foutberoep').show();     
            errorCount++;
        } 
        
        if (errorCount > 0){
            return false;
        }else {
           // alert("Gelukt!")
            return true;
        }

        // event.preventDefault();

    });

  
});

//function used to check valid email
function checkUsername(naam) {
    //reguliere expressie voor de naam
        var pattern = new RegExp(/^[A-Z][a-z]*$/);
        if(pattern.test(naam)){
            return true;
        } else {
            return false;
        }
    }

function checksirname(achternaam) {
    //reguliere expressie voor de achternaam
    var pattern = new RegExp(/^[A-Z][a-z]*$/);
    if(pattern.test(achternaam)){
        return true;
    } else {
        return false;
    }
}

function checkAdress(adres) {
    //reguliere expressie voor de adres  //
    var pattern = new RegExp(/^[A-Z].+\s[0-9]+$/);
    if(pattern.test(adres)){
        return true;
    } else {
        return false;
    }
}

function CheckPlace(plaats) {
    //reguliere expressie voor de plaats
    var pattern = new RegExp(/^[A-Za-z]+$/);
    if(pattern.test(plaats)){
    return true;
    } else {
    return false;
    }
}

function CheckZipcode(postcode) {
    //reguliere expressie voor de plaats
    var pattern = new RegExp(/[1-9][0-9]{3}\s?[A-Z]{2}/);
    if(pattern.test(postcode)){
    return true;
    } else {
    return false;
    }
}

function CheckNat(Nationaliteit) {
    //reguliere expressie voor de plaats
    var pattern = new RegExp(/^[A-Z]{1}[a-z]*$/);
    if(pattern.test(Nationaliteit)){
    return true;
    } else {
    return false;
    }
}

function checkEmail(beroep) {
    //reguliere expressie voor de plaats
    var pattern = new RegExp(/^[A-Z]{1}[a-z]*$/);
    if(pattern.test(beroep)){
    return true;
    } else {
    return false;
    }
}




function setGender() {
    let aanhefSelect = "";

    if ($("#heer").is(":selected")) {
        aanhefSelect = 'heer';
        $("body").css("background-color", '#006400');
        $("input").css("#label-color", '#7CFC00');
    } 
    if ($("#vrouw").is(":selected")) {
        aanhefSelect = 'vrouw';
        $("body").css("background-color", '#FF00FF');
        $("input").css("color", '#7FFF00');
    } 
    if ($("#anders").is(":selected")) {
        aanhefSelect = 'anders';
        $("body").css("background-color", 'yellow');
    } 
        $('.submit').click(function(){
            $('#gelukt').fadein(3000, function(){
                console.log("nu laat die het zien");
            });
    });
}

//Leeftijd uitrekenen
var leeftijdrek = function(verjaardag) {
    var now = new Date();
    var past = new Date(verjaardag);
    var nowYear = now.getFullYear();
    var pastYear = past.getFullYear();
    var age = nowYear - pastYear;

    return age;
};

$('#verjaardag').change(function(e) {
    // e.preventDefault();
    var $verjaardag = $('#verjaardag').val();
    //Deze moet onder de leeftijd komen
    $("#leeftijd").html(leeftijdrek($verjaardag) + 'jaar');
});


function setLanguage(language){
    for (const item in labels[language]){
        $("#" + item).html(labels[language][item]);
    }
}