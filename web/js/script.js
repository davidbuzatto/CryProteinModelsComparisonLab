/* global Jmol, Comando */

var jmolApplet;
            
var models = null;
var selectedModel = null;
var loaded = false;

var corModelo1 = "#109ebd";
var corModelo2 = "#c7000e";

var prefixo = "results/";

var use = "HTML5";
var s = document.location.search;

var corStructH = "#7030A0";
var corStructE = "#FFC000";
var corStructL = "#007523";

var recorteM1 = null;
var recorteM2 = null;

var dCartoon = true;
var dLicorice = false;
var dTrace = false;
var dBackbone = false;
var dBS = false;
var dLabels = false;
var dDots1 = false;
var dDots2 = false;
var dSurface1 = false;
var dSurface2 = false;
var dContact1 = false;
var dContact2 = false;


var dadosProteinas = {
    Cry1Aa1: { 
        dI: [ 48, 251 ],
        dII: [ 259, 460 ],
        dIII: [ 462, 605 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C"
    }, 
    Cry1Ac1: { 
        dI: [ 48, 251 ],
        dII: [ 259, 461 ],
        dIII: [ 463, 609 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C"
    },
    Cry2Aa1: { 
        dI: [ 80, 262 ],
        dII: [ 267, 472 ],
        dIII: [ 494, 628 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_mid",
        dIIIName: "Endotoxin_C"
    },
    Cry3Aa1: { 
        dI: [ 91, 295 ],
        dII: [ 303, 507 ],
        dIII: [ 510, 652 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C"
    },
    Cry3Bb1: { 
        dI: [ 82, 288 ],
        dII: [ 296, 502 ],
        dIII: [ 505, 650 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C"
    },
    Cry4Aa1: { 
        dI: [ 110, 314 ],
        dII: [ 322, 528 ],
        dIII: [ 530, 678 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C"
    },
    Cry4Ba1: { 
        dI: [ 69, 268 ],
        dII: [ 284, 470 ],
        dIII: [ 480, 623 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "Endotoxin_C"
    },
    Cry5B: { 
        dI: [ 91, 327 ],
        dII: null,
        dIII: [ 562, 695 ],
        dIName: "Endotoxin_N",
        dIIName: "",
        dIIIName: "Endotoxin_C"
    },
    Cry8Ea1: { 
        dI: [ 86, 289 ],
        dII: [ 297, 501 ],
        dIII: [ 502, 652 ],
        dIName: "Endotoxin_N",
        dIIName: "Endotoxin_M",
        dIIIName: "delta_endotoxin_C"
    }
};

var jmol_isReady = function (applet) {
    Jmol._getElement( applet, "appletdiv" ).style.border = "1px solid black";
};

$( function(){
    
    $.getJSON( "js/modelos.json", function( data ){

        models = data;

        $.each( data, function( key, val ) {
            $( "#selModels" ).append( "<option value='" + val.dir + "'>" + val.show + "</option>" );
        });
        
        initComponents();

    });

});

function initComponents() {
    
    $( "#btnOpenConsole" ).click( function() {
        Jmol.script( jmolApplet, "console;" );
        $( "#jmolApplet_console" ).css( "top", "100px" );
        $( "#jmolApplet_console" ).css( "left", "100px" );
    });

    $( "#btnSlices" ).click( function() {
        if ( selectedModel !== null ) {
            montarDialogoSlices();
            $( "#dialogSlices" ).dialog( "open" );
        } else {
            alert( "You need to load a model first!" );
        }
    });

    $( "#txtCommand" ).keypress( function( evt ){
        if ( evt.keyCode === 13 ) {
            $( "#btnExecute" ).trigger( "click" );
        }
    });

    $( "#btnExecute" ).click( function() {
        
        var command = $( "#txtCommand" ).val();
        Jmol.script( jmolApplet, command + ";" );
        
        if ( command.indexOf( "console" ) !== -1 ) {
            $( "#jmolApplet_console" ).css( "top", "100px" );
            $( "#jmolApplet_console" ).css( "left", "100px" );
        }
        
        $( "#txtCommand" ).val( "" );
        
    });

    $( "#btnSaveFile" ).click( function() {
        Jmol.script( jmolApplet, "write FILE ?" );
    });

    $( "#btnSavePNG" ).click( function() {
        Jmol.script( jmolApplet, "write IMAGE ?.png" );
    });

    $( "#btnSaveJmol" ).click( function() {
        Jmol.script( jmolApplet, "write ?.jmol" );
    });

    $( "#btnSaveState" ).click( function() {
        Jmol.script( jmolApplet, "write STATE ?.spt" );
    });


    $( "#btnRepCartoon" ).click( function( evt ) {
        
        dCartoon = !dCartoon;
        toggleBotaoRepresentacao( dCartoon, this );
        
        var comandoModelo1 = Comando.buildComandoCartoon( dCartoon, "1.1", recorteM1, corModelo1 );
        var comandoModelo2 = Comando.buildComandoCartoon( dCartoon, "2.1", recorteM2, corModelo2 );
        
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
            
    });
    
    $( "#btnRepLicorice" ).click( function( evt ) {
        
        dLicorice = !dLicorice;
        toggleBotaoRepresentacao( dLicorice, this );
        
        var comandoModelo1 = Comando.buildComandoLicorice( dLicorice, "1.1", recorteM1, shadeBlendConvert( -0.50, corModelo1 ) );
        var comandoModelo2 = Comando.buildComandoLicorice( dLicorice, "2.1", recorteM2, shadeBlendConvert( -0.50, corModelo2 ) );
        
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
        
    });
    
    $( "#btnRepTrace" ).click( function( evt ) {
        
        dTrace = !dTrace;
        toggleBotaoRepresentacao( dTrace, this );
        
        var comandoModelo1 = Comando.buildComandoTrace( dTrace, "1.1", recorteM1, shadeBlendConvert( 0.50, corModelo1 ) );
        var comandoModelo2 = Comando.buildComandoTrace( dTrace, "2.1", recorteM2, shadeBlendConvert( 0.50, corModelo2 ) );
        
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
        
    });
    
    $( "#btnRepBackbone" ).click( function( evt ) {
        
        dBackbone = !dBackbone;
        toggleBotaoRepresentacao( dBackbone, this );
        
        var comandoModelo1 = Comando.buildComandoBackbone( dBackbone, "1.1", recorteM1, shadeBlendConvert( -0.50, corModelo1 ) );
        var comandoModelo2 = Comando.buildComandoBackbone( dBackbone, "2.1", recorteM2, shadeBlendConvert( -0.50, corModelo2 ) );
        
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
        
    });
    
    $( "#btnRepBS" ).click( function( evt ) {
        
        dBS = !dBS;
        toggleBotaoRepresentacao( dBS, this );
        
        var comandoModelo1 = Comando.buildComandoBall( dBS, "1.1", recorteM1 );
        var comandoModelo2 = Comando.buildComandoBall( dBS, "2.1", recorteM2 );
        
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
        
    });
    
    $( "#btnRepLabels" ).click( function( evt ) {
        
        dLabels = !dLabels;
        toggleBotaoRepresentacao( dLabels, this );
        
        var comandoModelo1 = Comando.buildComandoLabels( dLabels, "1.1", recorteM1 );
        var comandoModelo2 = Comando.buildComandoLabels( dLabels, "2.1", recorteM2 );
        
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
        
    });
    
    $( "#btnRepDots1" ).click( function( evt ) {
        
        dDots1 = !dDots1;
        toggleBotaoRepresentacao( dDots1, this );
        
        var comandoModelo1 = Comando.buildComandoDots( dDots1, "1.1", recorteM1, shadeBlendConvert( 0.50, corModelo1 ) );
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        
    });
    
    $( "#btnRepDots2" ).click( function( evt ) {
        
        dDots2 = !dDots2;
        toggleBotaoRepresentacao( dDots2, this );
        
        var comandoModelo2 = Comando.buildComandoDots( dDots2, "2.1", recorteM2, shadeBlendConvert( 0.50, corModelo2 ) );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
        
    });
    
    $( "#btnRepSurface1" ).click( function( evt ) {
        
        dSurface1= !dSurface1;
        toggleBotaoRepresentacao( dSurface1, this );
        
        if ( dSurface1 ) {
            dSurface2 = false;
            toggleBotaoRepresentacao( dSurface2, $( "#btnRepSurface2" ) );
        }
        
        var comandoModelo1 = Comando.buildComandoSurface( dSurface1, "1.1", recorteM1, shadeBlendConvert( 0.50, corModelo1 ) );
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        
    });
    
    $( "#btnRepSurface2" ).click( function( evt ) {
        
        dSurface2= !dSurface2;
        toggleBotaoRepresentacao( dSurface2, this );
        
        if ( dSurface2 ) {
            dSurface1 = false;
            toggleBotaoRepresentacao( dSurface1, $( "#btnRepSurface1" ) );
        }
        
        var comandoModelo2 = Comando.buildComandoSurface( dSurface2, "2.1", recorteM2, shadeBlendConvert( 0.50, corModelo2 ) );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
        
    });
    
    $( "#btnRepContact1" ).click( function( evt ) {
        
        dContact1 = !dContact1;
        toggleBotaoRepresentacao( dContact1, this );
        
        if ( dContact1 ) {
            dContact2 = false;
            toggleBotaoRepresentacao( dContact2, $( "#btnRepContact2" ) );
        }
        
        var comandoModelo1 = Comando.buildComandoContact( dContact1, "1.1", "2.1", recorteM1, recorteM2 );
        Jmol.script( jmolApplet, comandoModelo1.gerarComando() );
        
        
    });
    
    $( "#btnRepContact2" ).click( function( evt ) {
        
        dContact2 = !dContact2;
        toggleBotaoRepresentacao( dContact2, this );
        
        if ( dContact2 ) {
            dContact1 = false;
            toggleBotaoRepresentacao( dContact1, $( "#btnRepContact1" ) );
        }
        
        var comandoModelo2 = Comando.buildComandoContact( dContact2, "2.1", "1.1", recorteM2, recorteM1 );
        Jmol.script( jmolApplet, comandoModelo2.gerarComando() );
        
    });
    
    $( "#btnRepShowAll" ).click( function() {
        
        var comandoShowAll = Comando.buildComandoShowAll( "" );
        Jmol.script( jmolApplet, comandoShowAll.gerarComando() );
        
        recorteM1 = null;
        recorteM2 = null;
        
    });
    
    $( "#btnRepResetView" ).click( function() {
        
        resetBotoes();
        
        var comandoResetView = Comando.buildComandoResetView();
        Jmol.script( jmolApplet, comandoResetView.gerarComando() );
        
        recorteM1 = null;
        recorteM2 = null;
        
    });

    $( "#btnCorCPK" ).click( function() {
        Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "1.1", "cpk" ).gerarComando() );
        Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "2.1", "cpk" ).gerarComando() );
    });

    $( "#btnCorGroup" ).click( function() {
        Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "1.1", "group" ).gerarComando() );
        Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "2.1", "group" ).gerarComando() );
    });

    $( "#btnCorAA" ).click( function() {
        Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "1.1", "amino" ).gerarComando() );
        Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "2.1", "amino" ).gerarComando() );
    });

    $( "#btnCorStructure" ).click( function() {
        Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "1.1", "structure" ).gerarComando() );
        Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "2.1", "structure" ).gerarComando() );
    });

    $( "#btnLoad" ).click( function(){
        
        if ( $( "#selModels" ).val() !== "sel" ) {

            resetBotoes();

            $( "#dialogSlices" ).dialog( "close" );
            $( "#dialogDadosSlice" ).dialog( "close" );
            
            var model = models[ $( "#selModels" ).val() ];
            var v = model.show.split( " " );

            var m1 = prefixo + model.dir + "/aligned_mol1A_" + v[0] + "_" + v[1];
            var m2 = prefixo + model.dir + "/aligned_mol2A_" + v[3] + "_" + v[4];

            Jmol.script( jmolApplet, Comando.buildComandoCarga( m1, m2, corModelo1, corModelo2 ).gerarComando() );

            loaded = true;
            
            $( "#nameModel1" ).html( v[0] + " " + v[1] );
            $( "#nameModel2" ).html( v[3] + " " + v[4] );
            
            recorteM1 = null;
            recorteM2 = null;

        } else {
            
            alert( "You need to choose one of the compared models!" );
            
        }

    });

    $( "#selModels" ).change( function( evt ){

        var v = $( "#selModels" ).val();

        if ( v !== "sel" ) {
            selectedModel = models[v];
        } else {
            selectedModel = null;
        }

    });

    $( "#cpCorM1" ).colorpicker({
        color: corModelo1
    });

    $( "#cpCorM1" ).on( "hidePicker", function( evt ){
        corModelo1 = evt.color.toHex();
        if ( selectedModel !== null && loaded ) {
            Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "1.1", corModelo1 ).gerarComando() );
        }
    });

    $( "#cpCorM2" ).colorpicker({
        color: corModelo2
    });

    $( "#cpCorM2" ).on( "hidePicker", function( evt ){
        corModelo2 = evt.color.toHex();
        if ( selectedModel !== null && loaded ) {
            Jmol.script( jmolApplet, Comando.buildComandoChangeColor( "2.1", corModelo2 ).gerarComando() );
        }
    });
    
    $( "#dialogSlices" ).dialog({ 
        autoOpen: false,
        resizable: false,
        minWidth: 630,
        title: "Similarity Slices"
    });
    
    $( "#dialogDadosSlice" ).dialog({
        dialogClass: "no-close",
        autoOpen: false,
        minWidth: 260
    });
    
    $("[data-toggle='tooltip']").tooltip({container: "body"});
    $.jCanvas.defaults.fromCenter = false;
    
}

function resetBotoes() {
    
    dCartoon = true;
    dLicorice = false;
    dTrace = false;
    dBackbone = false;
    dBS = false;
    dLabels = false;
    dDots1 = false;
    dDots2 = false;
    dSurface1 = false;
    dSurface2 = false;
    dContact1 = false;
    dContact2 = false;

    toggleBotaoRepresentacao( dCartoon, "#btnRepCartoon" );
    toggleBotaoRepresentacao( dLicorice, "#btnRepLicorice" );
    toggleBotaoRepresentacao( dTrace, "#btnRepTrace" );
    toggleBotaoRepresentacao( dBackbone, "#btnRepBackbone" );
    toggleBotaoRepresentacao( dBS, "#btnRepBS" );
    toggleBotaoRepresentacao( dLabels, "#btnRepLabels" );
    toggleBotaoRepresentacao( dDots1, "#btnDots1" );
    toggleBotaoRepresentacao( dDots2, "#btnDots2" );
    toggleBotaoRepresentacao( dSurface1, "#btnRepSurface1" );
    toggleBotaoRepresentacao( dSurface2, "#btnRepSurface2" );
    toggleBotaoRepresentacao( dContact1, "#btnRepContact1" );
    toggleBotaoRepresentacao( dContact2, "#btnRepContact2" );
        
}

function toggleBotaoRepresentacao( test, obj ) {
    if ( test ) {
        $( obj ).removeClass( "btn-primary" ).addClass( "btn-success" );
    } else {
        $( obj ).removeClass( "btn-success" ).addClass( "btn-primary" );
    }
}

function enviarComandoSlice() {
    Jmol.script( jmolApplet, Comando.buildComandoSlice( recorteM1, recorteM2 ).gerarComando() );
}

function enviarComandoDominioMouseover( modelo, interval, cor ) {
    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    modelo, {
                        ini: interval[0],
                        fim: interval[1]
                    }, 
                    cor ).gerarComando() );
                    
}

function enviarComandoDominioMouseout( modelo, interval ) {
    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    modelo, {
                        ini: interval[0],
                        fim: interval[1]
                    }, 
                    ( modelo === "1.1" ? corModelo1 : corModelo2 ) ).gerarComando() );
                    
}

function enviarComandoSliceMouseover( rec ) {
    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    "1.1", {
                        ini: rec.iniMod1c,
                        fim: rec.fimMod1c
                    }, 
                    "#eea236" ).gerarComando() );
                    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    "2.1", {
                        ini: rec.iniMod2c,
                        fim: rec.fimMod2c
                    }, 
                    "#eea236" ).gerarComando() );
    
}

function enviarComandoSliceMouseout( rec ) {
    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    "1.1", {
                        ini: rec.iniMod1c,
                        fim: rec.fimMod1c
                    }, 
                    corModelo1 ).gerarComando() );
                    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    "2.1", {
                        ini: rec.iniMod2c,
                        fim: rec.fimMod2c
                    }, 
                    corModelo2 ).gerarComando() );
    
}

function enviarComandoAAMouseover( evt ) {
    
    var $span = $( evt.target );
    var cor = "#eea236";
    
    switch ( $span.html() ) {
        case "H":
            cor = corStructH;
            break;
        case "E":
            cor = corStructE;
            break;
        case "L":
            cor = corStructL;
            break;
    }
    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    "1.1", {
                        ini: $span.data( "pos1" ),
                        fim: $span.data( "pos1" )
                    }, 
                    cor ).gerarComando() );
                    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    "2.1", {
                        ini: $span.data( "pos2" ),
                        fim: $span.data( "pos2" )
                    }, 
                    cor ).gerarComando() );
    
}

function enviarComandoAAMouseout( evt ) {
    
    var $span = $( evt.target );
    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    "1.1", {
                        ini: $span.data( "pos1" ),
                        fim: $span.data( "pos1" )
                    }, 
                    corModelo1 ).gerarComando() );
                    
    Jmol.script( jmolApplet, 
            Comando.buildComandoChangeColorIntervalo(
                    "2.1", {
                        ini: $span.data( "pos2" ),
                        fim: $span.data( "pos2" )
                    }, 
                    corModelo2 ).gerarComando() );
    
}

function montarDialogoSlices() {
    
    var $canvas = $( "#canvasSlices" );
    var largura = Number( $canvas.attr( "width" ) );
    var altura = Number( $canvas.attr( "height" ) );
    
    $canvas.removeLayers();
    $canvas.clearCanvas();
    
    $canvas.drawRect({
        layer: true,
        fillStyle: '#fff',
        cornerRadius: 10,
        strokeStyle: '#999',
        strokeWidth: 2,
        x: 1,
        y: 1,
        width: largura - 2,
        height: altura - 2
    });
    
    var dM1 = dadosProteinas[selectedModel.recortes[0].m1];
    var dM2 = dadosProteinas[selectedModel.recortes[0].m2];
    var totalAA1 = selectedModel.totalAA1;
    var totalAA2 = selectedModel.totalAA2;
    var maximo = 0;
    var margem = 20;
    
    if ( totalAA1 > totalAA2 ) {
        maximo = totalAA1;
    } else {
        maximo = totalAA2;
    }
    
    $canvas.drawText({
        layer: true,
        fillStyle: '#999',
        fontStyle: 'bold',
        x: margem,
        y: 20,
        fontSize: 18,
        fontFamily: 'monospace',
        text: selectedModel.recortes[0].m1
    });

    $canvas.drawRect({
        layer: true,
        fillStyle: '#ddd',
        strokeStyle: '#999',
        strokeWidth: 1,
        x: margem,
        y: 40,
        width: ( largura - margem*2 ) * totalAA1 / maximo,
        height: 40
    });
    
    if ( dM1.dI !== null ) {
        
        $canvas.drawRect({
            layer: true,
            fillStyle: '#ACCCEA',
            strokeStyle: '#849CB2',
            strokeWidth: 1,
            x: margem + ( largura - margem*2 ) * dM1.dI[0] / maximo,
            y: 40,
            width: ( largura - margem*2 ) * (dM1.dI[1] - dM1.dI[0]) / maximo,
            height: 40,
            cursors: {
                mouseover: "pointer"
            },
            mouseover: function( layer ) {
                layer.fillStyle = "#eea236";
                layer.strokeStyle = "#000";
                enviarComandoDominioMouseover( "1.1", dM1.dI, "#ACCCEA" );
            },
            mouseout: function( layer ) {
                layer.fillStyle = "#ACCCEA";
                layer.strokeStyle = "#849CB2";
                enviarComandoDominioMouseout( "1.1", dM1.dI );
            }
        });
        
        $canvas.drawText({
            layer: true,
            fillStyle: '#849CB2',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM1.dI[0] / maximo,
            y: 43,
            fontSize: 18,
            fontFamily: 'monospace',
            text: "D-I"
        });
        
        $canvas.drawText({
            layer: true,
            fillStyle: '#849CB2',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM1.dI[0] / maximo,
            y: 68,
            fontSize: 10,
            fontFamily: 'monospace',
            text: dM1.dIName
        });
        
    }
    
    if ( dM1.dII !== null ) {
        
        $canvas.drawRect({
            layer: true,
            fillStyle: '#AFEAAA',
            strokeStyle: '#8CBA87',
            strokeWidth: 1,
            x: margem + ( largura - margem*2 ) * dM1.dII[0] / maximo,
            y: 40,
            width: ( largura - margem*2 ) * (dM1.dII[1] - dM1.dII[0]) / maximo,
            height: 40,
            cursors: {
                mouseover: "pointer"
            },
            mouseover: function( layer ) {
                layer.fillStyle = "#eea236";
                layer.strokeStyle = "#000";
                enviarComandoDominioMouseover( "1.1", dM1.dII, "#AFEAAA" );
            },
            mouseout: function( layer ) {
                layer.fillStyle = "#AFEAAA";
                layer.strokeStyle = "#8CBA87";
                enviarComandoDominioMouseout( "1.1", dM1.dII );
            }
        });

        $canvas.drawText({
            layer: true,
            fillStyle: '#8CBA87',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM1.dII[0] / maximo,
            y: 43,
            fontSize: 18,
            fontFamily: 'monospace',
            text: "D-II"
        });
        
        $canvas.drawText({
            layer: true,
            fillStyle: '#8CBA87',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM1.dII[0] / maximo,
            y: 68,
            fontSize: 10,
            fontFamily: 'monospace',
            text: dM1.dIIName
        });
        
    }

    if ( dM1.dIII !== null ) {
        
        $canvas.drawRect({
            layer: true,
            fillStyle: '#FFCD93',
            strokeStyle: '#CEA386',
            strokeWidth: 1,
            x: margem + ( largura - margem*2 ) * dM1.dIII[0] / maximo,
            y: 40,
            width: ( largura - margem*2 ) * (dM1.dIII[1] - dM1.dIII[0]) / maximo,
            height: 40,
            cursors: {
                mouseover: "pointer"
            },
            mouseover: function( layer ) {
                layer.fillStyle = "#eea236";
                layer.strokeStyle = "#000";
                enviarComandoDominioMouseover( "1.1", dM1.dIII, "#FFCD93" );
            },
            mouseout: function( layer ) {
                layer.fillStyle = "#FFCD93";
                layer.strokeStyle = "#CEA386";
                enviarComandoDominioMouseout( "1.1", dM1.dIII );
            }
        });

        $canvas.drawText({
            layer: true,
            fillStyle: '#CEA386',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM1.dIII[0] / maximo,
            y: 43,
            fontSize: 18,
            fontFamily: 'monospace',
            text: "D-III"
        });
        
        $canvas.drawText({
            layer: true,
            fillStyle: '#CEA386',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM1.dIII[0] / maximo,
            y: 68,
            fontSize: 10,
            fontFamily: 'monospace',
            text: dM1.dIIIName
        });
        
    }
    
    $canvas.drawText({
        layer: true,
        fillStyle: '#999',
        fontStyle: 'bold',
        x: margem,
        y: 180,
        fontSize: 18,
        fontFamily: 'monospace',
        text: selectedModel.recortes[0].m2
    });
    
    $canvas.drawRect({
        layer: true,
        fillStyle: '#ddd',
        strokeStyle: '#999',
        strokeWidth: 1,
        x: margem,
        y: 200,
        width: ( largura - margem*2 ) * totalAA2 / maximo,
        height: 40
    });
    
    if ( dM2.dI !== null ) {
        
        $canvas.drawRect({
            layer: true,
            fillStyle: '#ACCCEA',
            strokeStyle: '#849CB2',
            strokeWidth: 1,
            x: margem + ( largura - margem*2 ) * dM2.dI[0] / maximo,
            y: 200,
            width: ( largura - margem*2 ) * (dM2.dI[1] - dM2.dI[0]) / maximo,
            height: 40,
            cursors: {
                mouseover: "pointer"
            },
            mouseover: function( layer ) {
                layer.fillStyle = "#eea236";
                layer.strokeStyle = "#000";
                enviarComandoDominioMouseover( "2.1", dM2.dI, "#ACCCEA" );
            },
            mouseout: function( layer ) {
                layer.fillStyle = "#ACCCEA";
                layer.strokeStyle = "#849CB2";
                enviarComandoDominioMouseout( "2.1", dM2.dI );
            }
        });

        $canvas.drawText({
            layer: true,
            fillStyle: '#849CB2',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM2.dI[0] / maximo,
            y: 203,
            fontSize: 18,
            fontFamily: 'monospace',
            text: "D-I"
        });
        
        $canvas.drawText({
            layer: true,
            fillStyle: '#849CB2',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM2.dI[0] / maximo,
            y: 228,
            fontSize: 10,
            fontFamily: 'monospace',
            text: dM2.dIName
        });
        
    }

    if ( dM2.dII !== null ) {
        
        $canvas.drawRect({
            layer: true,
            fillStyle: '#AFEAAA',
            strokeStyle: '#8CBA87',
            strokeWidth: 1,
            x: margem + ( largura - margem*2 ) * dM2.dII[0] / maximo,
            y: 200,
            width: ( largura - margem*2 ) * (dM2.dII[1] - dM2.dII[0]) / maximo,
            height: 40,
            cursors: {
                mouseover: "pointer"
            },
            mouseover: function( layer ) {
                layer.fillStyle = "#eea236";
                layer.strokeStyle = "#000";
                enviarComandoDominioMouseover( "2.1", dM2.dII, "#AFEAAA" );
            },
            mouseout: function( layer ) {
                layer.fillStyle = "#AFEAAA";
                layer.strokeStyle = "#8CBA87";
                enviarComandoDominioMouseout( "2.1", dM2.dII );
            }
        });

        $canvas.drawText({
            layer: true,
            fillStyle: '#8CBA87',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM2.dII[0] / maximo,
            y: 203,
            fontSize: 18,
            fontFamily: 'monospace',
            text: "D-II"
        });
        
        $canvas.drawText({
            layer: true,
            fillStyle: '#8CBA87',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM2.dII[0] / maximo,
            y: 228,
            fontSize: 10,
            fontFamily: 'monospace',
            text: dM2.dIIName
        });
    }
    
    if ( dM2.dIII !== null ) {
        
        $canvas.drawRect({
            layer: true,
            fillStyle: '#FFCD93',
            strokeStyle: '#CEA386',
            strokeWidth: 1,
            x: margem + ( largura - margem*2 ) * dM2.dIII[0] / maximo,
            y: 200,
            width: ( largura - margem*2 ) * (dM2.dIII[1] - dM2.dIII[0]) / maximo,
            height: 40,
            cursors: {
                mouseover: "pointer"
            },
            mouseover: function( layer ) {
                layer.fillStyle = "#eea236";
                layer.strokeStyle = "#000";
                enviarComandoDominioMouseover( "2.1", dM2.dIII, "#FFCD93" );
            },
            mouseout: function( layer ) {
                layer.fillStyle = "#FFCD93";
                layer.strokeStyle = "#CEA386";
                enviarComandoDominioMouseout( "2.1", dM2.dIII );
            }
        });

        $canvas.drawText({
            layer: true,
            fillStyle: '#CEA386',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM2.dIII[0] / maximo,
            y: 203,
            fontSize: 18,
            fontFamily: 'monospace',
            text: "D-III"
        });
        
        $canvas.drawText({
            layer: true,
            fillStyle: '#CEA386',
            fontStyle: 'bold',
            x: margem + 5 + ( largura - margem*2 ) * dM2.dIII[0] / maximo,
            y: 228,
            fontSize: 10,
            fontFamily: 'monospace',
            text: dM2.dIIIName
        });
        
    }
    
    var primeiro = true;
    
    $.each( selectedModel.recortes, function( pos, rec ){
        
        if ( primeiro ) {
            $canvas.drawText({
                layer: true,
                fillStyle: '#999',
                fontStyle: 'bold',
                x: margem + ( largura - margem*2 ) * rec.iniMod1c / maximo,
                y: 100,
                fontSize: 18,
                fontFamily: 'monospace',
                text: "Slices"
            });
            primeiro = false;
        }
        
        $canvas.drawRect({
            layer: true,
            name: "layerSlice" + pos,
            fillStyle: '#ddd',
            strokeStyle: '#999',
            strokeWidth: 1,
            pos: pos,
            x: margem + ( largura - margem*2 ) * rec.iniMod1c / maximo,
            y: 120,
            width: ( largura - margem*2 ) * (rec.fimMod1c - rec.iniMod1c) / maximo,
            height: 40,
            cursors: {
                mouseover: "pointer"
            },
            mouseover: function( layer ) {
                layer.fillStyle = "#eea236";
                layer.strokeStyle = "#000";
                enviarComandoSliceMouseover( selectedModel.recortes[layer.pos] );
            },
            mouseout: function( layer ) {
                layer.fillStyle = "#ddd";
                layer.strokeStyle = "#999";
                enviarComandoSliceMouseout( selectedModel.recortes[layer.pos] );
            },
            click: function( layer ) {
                
                var recorte = selectedModel.recortes[layer.pos];
                
                recorteM1 = {
                    ini: recorte.iniMod1c,
                    fim: recorte.fimMod1c
                };
                
                recorteM2 = {
                    ini: recorte.iniMod2c,
                    fim: recorte.fimMod2c
                };
                
                abrirDadosSlice( recorte, layer.event );
                enviarComandoSlice();
            }
        });
        
    });
    
    // botões
    $( "#btnsD" ).html( "" );
    var htmlToUse = "<button type='button' class='btn btn-warning'>#</button><span>&nbsp;</span>";
    
    $.each( selectedModel.recortes, function( pos, rec ){
        
        var $btn = null;
        
        $btn = $( htmlToUse.replace( "#", pos+1 ) );
        
        $btn.mouseover( function( evt ) {
            var posRec = Number( $( evt.target ).html() );
            $canvas.setLayer( "layerSlice" + (posRec-1), {
                fillStyle: "#eea236",
                strokeStyle: "#000"
            }).drawLayers();
            enviarComandoSliceMouseover( selectedModel.recortes[posRec-1] );
        });
        
        $btn.mouseout( function( evt ) {
            var posRec = Number( $( evt.target ).html() );
            $canvas.setLayer( "layerSlice" + (posRec-1), {
                fillStyle: "#ddd",
                strokeStyle: "#999"
            }).drawLayers();
            enviarComandoSliceMouseout( selectedModel.recortes[posRec-1] );
        });
        
        $btn.click( function( evt ) {
            
            var posRec = Number( $( evt.target ).html() );
            var recorte = selectedModel.recortes[posRec-1];
                
            recorteM1 = {
                ini: recorte.iniMod1c,
                fim: recorte.fimMod1c
            };

            recorteM2 = {
                ini: recorte.iniMod2c,
                fim: recorte.fimMod2c
            };
                
            abrirDadosSlice( recorte, evt );
            enviarComandoSlice();
            
        });
        
        $( "#btnsD" ).append( $btn );
        
    });
    
}

function abrirDadosSlice( rec, evt ) {
    
    var $divSliceData = $( "#divSliceData" );
    var $dialogDadosSlice = $( "#dialogDadosSlice" );
    
    var dados = montarDadosSlice( rec );
    
    $divSliceData.html( "" );
    $divSliceData.html( dados.html );
    
    $dialogDadosSlice.dialog( "option", "title", "Data of Slice " + rec.cont );
    $dialogDadosSlice.dialog( "option", "width", dados.size * 10 + 40 );
    
    $dialogDadosSlice.dialog( "option", "position", {
        my: "left+3 bottom-3",
        of: evt,
        collision: "fit"
    });
    
    $dialogDadosSlice.dialog( "open" );
    
}

function montarDadosSlice( rec ) {
    
    var dados = {};
    var html = "";
    var size = 0;
        
    html += "&nbsp;&nbsp;&nbsp;&nbsp;" + rec.m1 + ": [" + rec.iniMod1c + ";" + rec.fimMod1c + "]</br>";
    html += "&nbsp;&nbsp;&nbsp;&nbsp;" + rec.m2 + ": [" + rec.iniMod2c + ";" + rec.fimMod2c + "]</br></br>";
    
    if ( rec.struct1.length === 0 ) {
        size = rec.s1.length;
        html += formatarTexto( rec.s1, true, rec.iniMod1c, rec.iniMod2c ) + "</br>";
        html += formatarTexto( rec.a1, false ) + "</br>";
        html += formatarTexto( rec.i, false ) + "</br>";
        html += formatarTexto( rec.a2, false ) + "</br>";
        html += formatarTexto( rec.s2, true, rec.iniMod2c, rec.iniMod1c ) + "</br>";
    } else {
        
        size = rec.struct1[0].length;
        var ajuste = 0;
        
        for ( var i = 0; i < rec.struct1.length; i++ ) {
            
            if ( i !== 0 ) {
                var te = $.trim( rec.struct1[i] ).split( " " );
                ajuste += te[1].length;
            }
            
            html += formatarTexto( rec.struct1[i], true, rec.iniMod1c + ajuste, rec.iniMod2c + ajuste ) + "</br>";
            html += formatarTexto( rec.aa1[i], false ) + "</br>";
            html += formatarTexto( rec.id[i], false ) + "</br>";
            html += formatarTexto( rec.aa2[i], false ) + "</br>";
            html += formatarTexto( rec.struct2[i], true, rec.iniMod2c + ajuste, rec.iniMod1c + ajuste ) + "</br></br>";
            
        }
    }
    
    dados = {
        html: html,
        size: size
    };
    
    return dados;
    
}

function formatarTexto( texto, trocar, ini1, ini2 ) {
    
    var novo = texto.replace( /\s/g, "&nbsp;" );
    
    if ( trocar ) {
        
        var cont1 = ini1;
        var cont2 = ini2;
        var novoComEvento = "";
        
        for ( var i = 0; i < novo.length; i++ ) {
            
            var cl = null;
            var simbolo = null;
            
            switch ( novo[i] ) {
                case "@":
                    cl = "structH";
                    simbolo = "H";
                    break;
                case "?":
                    cl = "structE";
                    simbolo = "E";
                    break;
                case "+":
                    cl = "structL";
                    simbolo = "L";
                    break;
            }
            
            if ( cl ) {
                novoComEvento += "<span class='" + cl + "' " +
                        "data-pos1='" + cont1++ + "' " +
                        "data-pos2='" + cont2++ + "' " +
                        "onmouseover='enviarComandoAAMouseover(event)' " + 
                        "onmouseout='enviarComandoAAMouseout(event)' " + 
                        ">" + simbolo + "</span>";
            }
            
        }
        
        novo = texto.substring( 0, 4 ).replace( /\s/g, "&nbsp;" ) + 
                novoComEvento +
                texto.substring( texto.length - 4 ).replace( "/@/g", "" ).replace( "/[?]/g", "" ).replace( "/[+]/g", "" ).replace( /\s/g, "&nbsp;" ) ;
    }
    
    return novo;
    
}

function criarApplet() {
    jmolApplet = Jmol.getApplet( "jmolApplet", {
        width: 700,
        height: 700,
        debug: false,
        color: "white",
        addSelectionOptions: false,
        serverURL: "http://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php",
        use: "HTML5",
        j2sPath: "j2s",
        readyFunction: jmol_isReady,
        script: Comando.buildComandoInicial().gerarComando(),
        disableInitialConsole: true
    });
}