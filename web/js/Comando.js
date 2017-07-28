// usando classe E5 para garantir compatibilidade
var Comando = function( params ) {
    
    // ativação
    this.ativar = params.ativar;
    
    // seleção
    this.modelo = params.modelo;
    this.cadeia = params.cadeia;
    this.intervalo = params.intervalo;
    this.selecaoExtra = params.selecaoExtra;
    
    this.selecaoEspecial = params.especial;
    
    // comando
    this.comando = params.comando;
    this.parametros = params.parametros;
    this.comandoExtra = params.comandoExtra;
    
    // cor
    this.cor = params.cor;
    this.parametrosCor = params.parametrosCor;
    
    // comando especial
    this.comandoEspecial = params.comandoEspecial;
    
    // pretty printing
    this.pretty = params.pretty;
    
};

// método para gerar o comando
Comando.prototype.gerarComando = function() {
        
    var stringComando = "";

    if ( this.comandoEspecial ) {

        stringComando = this.comandoEspecial;

    } else {

        stringComando = "select none;";

        // seleção
        if ( this.selecaoEspecial ) {

            stringComando += this.selecaoEspecial + ";";

        } else if ( this.modelo ) {

            stringComando += "select model=" + this.modelo + " ";

            if ( this.cadeia ) {
                stringComando += "& chain=" + this.cadeia + " ";
            }

            if ( this.intervalo ) {
                stringComando += "& " + this.intervalo.ini + "-" + this.intervalo.fim;
            }

            if ( this.selecaoExtra ) {
                stringComando += this.selecaoExtra;
            }

            stringComando += ";";

        }

        // comando
        if ( this.ativar ) {

            if ( this.comando ) {
                stringComando += this.comando + " " + this.parametros + ";";
            }

            if ( this.comandoExtra ) {
                stringComando += this.comandoExtra + ";";
            }

            // cor
            if ( this.cor ) {

                stringComando += "color " + this.comando + " ";

                if ( this.parametrosCor ) {
                    stringComando += this.parametrosCor + " ";
                }

                stringComando += Comando.formatarCor( this.cor ) + ";";

            }

        } else {
            stringComando += this.comando + " off;";
        }

        stringComando += "select none;";

    }

    if ( this.pretty ) {
        return stringComando.replace( /[;]/g, ";\n" );
    }

    return stringComando;
    
};

Comando.formatarCor = function( cor ) {
    if ( cor[0] === "#" ) {
        return "[" + cor.replace( "#", "x" ) + "]";
    } else {
        return cor;
    }
}

// métodos estáticos de build de comandos
Comando.buildComandoCartoon = function( ativar, modelo, recorte, cor ) {
    
    if ( recorte ) {
        return new Comando({
            ativar: ativar,
            modelo: modelo,
            cadeia: "A",
            intervalo: {
                ini: recorte.ini,
                fim: recorte.fim
            },
            comando: "cartoon",
            parametros: "on",
            cor: cor
        });
    }
    
    return new Comando({
        ativar: ativar,
        modelo: modelo,
        cadeia: "A",
        comando: "cartoon",
        parametros: "on",
        cor: cor
    });
    
};

Comando.buildComandoLicorice = function( ativar, modelo, recorte, cor ) {
    
    if ( recorte ) {
        return new Comando({
            ativar: ativar,
            modelo: modelo,
            cadeia: "A",
            intervalo: {
                ini: recorte.ini,
                fim: recorte.fim
            },
            comando: "wireframe",
            parametros: "0.25",
            cor: cor
        });
    }
    
    return new Comando({
        ativar: ativar,
        modelo: modelo,
        cadeia: "A",
        comando: "wireframe",
        parametros: "0.25",
        cor: cor
    });
    
};

Comando.buildComandoTrace = function( ativar, modelo, recorte, cor ) {
    
    if ( recorte ) {
        return new Comando({
            ativar: ativar,
            modelo: modelo,
            cadeia: "A",
            intervalo: {
                ini: recorte.ini,
                fim: recorte.fim
            },
            comando: "trace",
            parametros: "on",
            cor: cor
        });
    }
    
    return new Comando({
        ativar: ativar,
        modelo: modelo,
        cadeia: "A",
        comando: "trace",
        parametros: "on",
        cor: cor
    });
    
};

Comando.buildComandoBackbone = function( ativar, modelo, recorte, cor ) {
    
    if ( recorte ) {
        return new Comando({
            ativar: ativar,
            modelo: modelo,
            cadeia: "A",
            intervalo: {
                ini: recorte.ini,
                fim: recorte.fim
            },
            comando: "backbone",
            parametros: "0.25",
            cor: cor
        });
    }
    
    return new Comando({
        ativar: ativar,
        modelo: modelo,
        cadeia: "A",
        comando: "backbone",
        parametros: "0.25",
        cor: cor
    });
    
};

Comando.buildComandoBall = function( ativar, modelo, recorte ) {
    
    if ( recorte ) {
        return new Comando({
            ativar: ativar,
            modelo: modelo,
            cadeia: "A",
            intervalo: {
                ini: recorte.ini,
                fim: recorte.fim
            },
            comando: "spacefill",
            parametros: "23%"
        });
    }
    
    return new Comando({
        ativar: ativar,
        modelo: modelo,
        cadeia: "A",
        comando: "spacefill",
        parametros: "23%"
    });
    
};

Comando.buildComandoLabels = function( ativar, modelo, recorte ) {
    
    if ( recorte ) {
        return new Comando({
            ativar: ativar,
            modelo: modelo,
            cadeia: "A",
            intervalo: {
                ini: recorte.ini,
                fim: recorte.fim
            },
            //selecaoExtra: ".CA; set labelfront",  // carbono alfa
            selecaoExtra: ".C; set labelfront",
            comando: "label",
            parametros: "%n",
            cor: "amino"
        });
    }
    
    return new Comando({
        ativar: ativar,
        modelo: modelo,
        cadeia: "A",
        //selecaoExtra: "& *.CA; set labelfront;",
        selecaoExtra: "& *.C; set labelfront;",
        comando: "label",
        parametros: "%n",
        cor: "amino"
    });
    
};

Comando.buildComandoDots = function( ativar, modelo, recorte, cor ) {
    
    if ( recorte ) {
        return new Comando({
            ativar: ativar,
            modelo: modelo,
            cadeia: "A",
            intervalo: {
                ini: recorte.ini,
                fim: recorte.fim
            },
            comando: "dots",
            parametros: "VANDERWAALS",
            cor: cor
        });
    }
    
    return new Comando({
        ativar: ativar,
        modelo: modelo,
        cadeia: "A",
        comando: "dots",
        parametros: "VANDERWAALS",
        cor: cor
    });
    
};

Comando.buildComandoSurface = function( ativar, modelo, recorte, cor ) {
    
    if ( recorte ) {
        return new Comando({
            ativar: ativar,
            modelo: modelo,
            cadeia: "A",
            intervalo: {
                ini: recorte.ini,
                fim: recorte.fim
            },
            comando: "isosurface",
            parametros: "resolution 0.0 molecular 1.4",
            comandoExtra: "isosurface fill noMesh noDots notFrontOnly frontlit",
            cor: cor,
            parametrosCor: "translucent 0.5"
        });
    }
    
    return new Comando({
        ativar: ativar,
        modelo: modelo,
        cadeia: "A",
        comando: "isosurface",
        parametros: "resolution 0.0 molecular 1.4",
        comandoExtra: "isosurface fill noMesh noDots notFrontOnly frontlit",
        cor: cor,
        parametrosCor: "translucent 0.5"
    });
    
};

Comando.buildComandoContact = function( ativar, modeloEsquerda, modeloDireita, recorteEsquerda, recorteDireita ) {
        
    if ( recorteEsquerda ) {
        return new Comando({
            ativar: ativar,
            comando: "contact",
            parametros: "{model=" + modeloEsquerda+ " & chain=A & " + 
                    recorteEsquerda.ini + "-" + recorteEsquerda.fim + "} " +
                    "{model=" + modeloDireita + " & chain=A & " + 
                    recorteDireita.ini + "-" + recorteDireita.fim + "} cap"
        });
    }
    
    return new Comando({
        ativar: ativar,
        comando: "contact",
        parametros: "{model=" + modeloEsquerda + " & chain=A} {model=" + modeloDireita + " & chain=A} cap"
    });
    
};

Comando.buildComandoShowAll = function() {
    
    return new Comando({
        ativar: true,
        modelo: "1.1",
        cadeia: "A",
        selecaoExtra: "; select add model=2.1 & chain=A",
        comando: "display",
        parametros: "selected",
        comandoExtra: "center selected"
    });
    
};

Comando.buildComandoResetView = function() {
    
    return new Comando({
        ativar: true,
        modelo: "1.1",
        cadeia: "A",
        selecaoExtra: "; select add model=2.1 & chain=A",
        comando: "cartoon",
        parametros: "on",
        comandoExtra: "wireframe off; trace off; backbone off; spacefill off; label off; dots off; isosurface off; contact off; display selected; zoom 0; center selected"
    });
    
};

Comando.buildComandoChangeColor = function( model, cor ) {
    
    var corClara = cor;
    var corEscura = cor;
    
    if ( cor[0] === "#" ) {
        
        corClara = shadeBlendConvert( 0.50, cor );
        corEscura = shadeBlendConvert( -0.50, cor );
        
        cor = Comando.formatarCor( cor );
        corClara = Comando.formatarCor( corClara );
        corEscura = Comando.formatarCor( corEscura );
        
    }
    
    return new Comando({
        ativar: true,
        modelo: model,
        cadeia: "A",
        comando: "color",
        parametros: "cartoon " + cor,
        comandoExtra: 
                "color wireframe " + corEscura + ";" +
                "color trace " + corClara + ";" +
                "color backbone " + corEscura + ";" +
                "color dots " + corClara
    });
    
};

Comando.buildComandoChangeColorIntervalo = function( model, intervalo, cor ) {
    
    var corClara = cor;
    var corEscura = cor;
    
    if ( cor[0] === "#" ) {
        
        corClara = shadeBlendConvert( 0.50, cor );
        corEscura = shadeBlendConvert( -0.50, cor );
        
        cor = Comando.formatarCor( cor );
        corClara = Comando.formatarCor( corClara );
        corEscura = Comando.formatarCor( corEscura );
        
    }
    
    return new Comando({
        ativar: true,
        modelo: model,
        cadeia: "A",
        intervalo: intervalo,
        comando: "color",
        parametros: "cartoon " + cor,
        comandoExtra: 
                "color wireframe " + corEscura + ";" +
                "color trace " + corClara + ";" +
                "color backbone " + corEscura + ";" +
                "color dots " + corClara
    });
    
};

Comando.buildComandoCarga = function( modelo1, modelo2, cor1, cor2 ) {
    
    var m1 = modelo1.split( "/" ).pop().replace( "aligned_mol1A_", "" );
    var m2 = modelo2.split( "/" ).pop().replace( "aligned_mol2A_", "" );
    
    //var comando = "select none; zap model=1.1; zap model=2.1;" +
    var comando = "select none; zap;" +
            
            "color echo [x000000]; echo loading models...;" +
            "refresh;" +
            
            "load models \"" + modelo1 + ".pdb\" \"" + modelo2 + ".pdb\";" +
            "hide all;" +
            
            "select model=1.1 & chain=A;" +
            "select add model=2.1 & chain=A;" +
            "cartoon on; wireframe off; trace off; backbone off; spacefill off;" + 
            "label off; dots off; isosurface off; contact off;" + 
            "display selected; center selected; zoom 0;" +
            
            "select none;" +
            "select model=1.1 & chain=A;" +
            "color cartoon " + Comando.formatarCor( corModelo1 )+ ";" +
            
            "select none;" +
            "select model=2.1 & chain=A;" +
            "color cartoon " + Comando.formatarCor( corModelo2 )+ ";" +
            
            "select none;" +
            "model 0;" +
            
            "color echo [x000000]; set echo top center;" +
            "echo " + m1 + ".pdb and " + m2 + ".pdb;";
    
    return new Comando({
        comandoEspecial: comando
    });
    
};

Comando.buildComandoInicial = function() {
    
    var comando = "h2oOn=true;" +
            "set animframecallback \"jmolscript: if (!selectionHalos) {select model=_modelNumber}\";" +
            "set errorCallback \"myCallback\";" +
            "set defaultloadscript \"isDssp = false;set defaultVDW babel;if(!h2oOn){display !water}\";" +
            "set zoomlarge false;" +
            "set echo top left; " +
            "set labelfront; " +
            //"set antialiasDisplay true; " +
            "color echo [x000000]; echo select an item from the list on the right and click the load button...; " + 
            "refresh;" +
            "spacefill off;" +
            "wireframe off;";
    
    return new Comando({
        comandoEspecial: comando
    });
    
};

Comando.buildComandoSlice = function( recorteM1, recorteM2 ) {
    
    var comando = "hide all;" +
            "select none;" +
            "select model=1.1 & chain=A & " + 
            recorteM1.ini + "-" + recorteM1.fim + ";" + 
            "select add model=2.1 & chain=A & " + 
            recorteM2.ini + "-" + recorteM2.fim + ";" + 
            "display selected;" + 
            "center selected;" +
            "select none;";
    
    return new Comando({
        comandoEspecial: comando
    });
    
};