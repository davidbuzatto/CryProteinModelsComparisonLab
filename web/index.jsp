<%-- 
    Document   : index
    Created on : Dec 2, 2016, 6:16:32 PM
    Author     : David
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
    
    <head>

        <title>3-Domain Cry Protein Models Comparison Lab</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
        <meta name="theme-color" content="#ffffff">
        
        <meta http-equiv="content-language" content="en">
        <meta name="author" content="David Buzatto">
        <meta name="description" content="3-Domain Cry Protein Models Comparison Site">
        <meta name="keywords" content="cry protein, protein comparison, dali">

        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/bootstrap-theme.min.css" rel="stylesheet">
        <link href="css/bootstrap-combobox.css" rel="stylesheet">
        <link href="css/bootstrap-colorpicker.min.css" rel="stylesheet">
        <link href="css/tether.min.css" rel="stylesheet">
        <link href="css/jquery-ui.min.css" rel="stylesheet">
        <link href="css/estilos.css" rel="stylesheet">
        
        <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png">
        <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png">
        <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png">
        <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png">
        <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png">
        <link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png">
        <link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png">
        <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png">
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png">
        <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png">
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png">
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png">
        <link rel="manifest" href="favicon/manifest.json">
        
        <c:choose>
            <c:when test="${initParam.desenvolvimento == true}">
                
                <script type="text/javascript" src="js/jquery.min.js"></script>
                <script type="text/javascript" src="js/jquery-migrate-3.0.0.min.js"></script>
                <script type="text/javascript" src="js/bootstrap.min.js"></script>
                <script type="text/javascript" src="js/bootstrap-combobox.js"></script>
                <script type="text/javascript" src="js/bootstrap-colorpicker.min.js"></script>
                <script type="text/javascript" src="js/tether.min.js"></script>
                <script type="text/javascript" src="js/jquery-ui.min.js"></script>
                <script type="text/javascript" src="js/jcanvas.min.js"></script>
                <script type="text/javascript" src="js/JSmol.min.nojq.js"></script>
                
                <script type="text/javascript" src="js/utils.js"></script>
                <script type="text/javascript" src="js/Comando.js"></script>
                <script type="text/javascript" src="js/dadosProteinas.js"></script>
                <script type="text/javascript" src="js/script.js"></script>
                
            </c:when>
            <c:otherwise>
                <script type="text/javascript" src="js/script.min.js"></script>
            </c:otherwise>
        </c:choose>
        
    </head>

    <body>

        <div class="container" role="main">
            
            <div class="page-header">
                <h2>3-Domain Cry Protein Models Comparison Lab <a href="#modalSobre" role="button" class="btn btn-default btn-lg" data-toggle="modal">About</a></h2>
            </div>
            
            <div>
                <div class="row equal">
                    <div class="col-lg-8">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title">Visualization</h3>
                            </div>
                            <div class="panel-body">
                                <script type="text/javascript">
                                    criarApplet();
                                </script>
                                <div class="row" style="padding-top: 10px;">
                                    <div class="col-md-6">
                                        <div class="input-group">
                                            <span class="input-group-addon">Command</span>
                                            <input id="txtCommand" type="text" class="form-control" placeholder="type 'help' to open Jmol script documentation"/>
                                            <span class="input-group-btn">
                                                <button id="btnExecute" class="btn btn-primary" type="button">Execute</button>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <button id="btnOpenConsole" type="button" class="btn btn-primary">Open Console</button>
                                    </div>
                                    <div class="col-md-4" style="text-align: right;">
                                        <button id="btnSlices" type="button" class="btn btn-warning">Slices and Receptors</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="panel panel-primary">
                            <div class="panel-heading">
                                <h3 class="panel-title">Interaction</h3>
                            </div>
                            <div class="panel-body">
                                
                                <div class="panel panel-success">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Compared Models</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div class="input-group">
                                            <select class="form-control" id="selModels">
                                                <option value="sel">Select one...</option>
                                            </select>
                                            <span class="input-group-btn">
                                                <button id="btnLoad" class="btn btn-success" type="button">Load</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Representations</h3>
                                    </div>
                                    <div class="panel-body">
                                        <div>
                                            <button id="btnRepCartoon" type="button" class="btn btn-success" data-toggle="tooltip" data-placement="top" title="Cartoon">C</button>
                                            <button id="btnRepLicorice" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Licorice">L</button>
                                            <button id="btnRepTrace" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Trace">T</button>
                                            <button id="btnRepBackbone" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Backbone">Bb</button>
                                            <button id="btnRepBS" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Balls">B</button>
                                            <button id="btnRepLabels" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Labels">Lb</button>
                                        </div>
                                        <div style="margin-top: 10px;">
                                            <button id="btnRepDots1" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Dots Model 1">D1</button>
                                            <button id="btnRepDots2" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Dots Model 2">D2</button>
                                            <div class="btn-group" role="group">
                                                <button id="btnRepSurface1" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Surface Model 1">S1</button>
                                                <button id="btnRepSurface2" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Surface Model 2">S2</button>
                                            </div>
                                            <div class="btn-group" role="group">
                                                <button id="btnRepContact1" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Contact Model 1-2">C1</button>
                                                <button id="btnRepContact2" type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Contact Model 2-1">C2</button>
                                            </div>
                                        </div>
                                        <div style="margin-top: 10px; margin-bottom: 10px;">
                                            <button id="btnRepShowAll" type="button" class="btn btn-primary">Show All</button>
                                            <button id="btnRepResetView" type="button" class="btn btn-primary">Reset View</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Colors</h3>
                                    </div>
                                    <div class="panel-body">
                                        <p>
                                            <button id="btnCorCPK" type="button" class="btn btn-primary">CPK</button>
                                            <button id="btnCorGroup" type="button" class="btn btn-primary">Group</button>
                                            <button id="btnCorAA" type="button" class="btn btn-primary">AA</button>
                                            <button id="btnCorStructure" type="button" class="btn btn-primary">Structure</button>
                                        </p>
                                        <p style="padding-top: 15px;">User defined:</p>
                                        <div id="cpCorM1" class="input-group colorpicker-component">
                                            <span class="input-group-addon" id="nameModel1">Model 1</span>
                                            <input type="text" value="#109ebd" class="form-control" readonly/>
                                            <span class="input-group-addon"><i></i></span>
                                        </div>
                                        <div id="cpCorM2" class="input-group colorpicker-component" style="padding-top: 10px;">
                                            <span class="input-group-addon" id="nameModel2">Model 2</span>
                                            <input type="text" value="#c7000c" class="form-control" readonly/>
                                            <span class="input-group-addon"><i></i></span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <h3 class="panel-title">Save File</h3>
                                    </div>
                                    <div class="panel-body">
                                        <p>
                                            <button id="btnSaveFile" type="button" class="btn btn-primary">File</button>
                                            <button id="btnSavePNG" type="button" class="btn btn-primary">PNG</button>
                                            <button id="btnSaveJmol" type="button" class="btn btn-primary">Jmol</button>
                                            <button id="btnSaveState" type="button" class="btn btn-primary">State</button>
                                        </p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        
        <div id="dialogSlices">
            <canvas id="canvasSlices" width="600" height="340"></canvas>
            <h4>Available Slice(s):</h4>
            <div id="btnsD" class="row" style="margin: 5px; line-height: 40pt;"></div>
            <h4>Available Receptor Region(s):</h4>
            <div id="btnsRM1" class="row" style="margin: 5px; line-height: 40pt;"></div>
            <div id="btnsRM2" class="row" style="margin: 5px; line-height: 40pt;"></div>
        </div>
        
        <div id="dialogDadosSlice">
            <div id="divSliceData">
                Slice data
            </div>
        </div>
        
        <div id="dialogDadosReceptor">
            <div id="divReceptorData">
                Receptor region data
            </div>
            <div style="text-align: right">
                <br/>
                <button id="btnAbrirRendered" type="button" class='btn btn-warning'>High Resolution Representation</button>
            </div>
        </div>
        
        <div id="dialogRendered">
            <img style="border: solid thin #000;" id="imgRendered" src=""/>
        </div>
        
        <div id="modalSobre" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">About</h4>
                    </div>
                    <div class="modal-body">
                        <p>
                            The objective of this site is to show the results of a Ph. D. project developed by
                            David Buzatto under the advisement of Prof. Sonia Marli Zinagaretti at UNAERP, Universidade de Ribeirão Preto.
                        </p>
                        <p>
                            <a href="http://lattes.cnpq.br/7916716785143122" target="_blank">David Buzatto academic curriculum.</a></br>
                            <a href="http://lattes.cnpq.br/3195515678174130" target="_blank">Prof. Sonia Marli Zingaretti academic curriculum.</a>
                        </p>
                        <p>
                            The models presented here were obtained in <a href="http://www.rcsb.org/" target="_blank">RCSB Protein Data Bank</a> and were processed by the <a href="http://ekhidna2.biocenter.helsinki.fi/dali/" target="_blank">Dali pairwise comparison service</a>.
                        </p>
                        <p>
                            This project uses the following JavaScript libraries:
                        </p>
                        <ul>
                            <li><a href="https://sourceforge.net/projects/jsmol/" target="_blank">JSmol - Molecule Visualization</a></li>
                            <li><a href="https://jquery.com/" target="_blank">jQuery - DOM Manipulation</a></li>
                            <li><a href="https://jqueryui.com/" target="_blank">jQuery UI - Dialogs</a></li>
                            <li><a href="http://getbootstrap.com/" target="_blank">Bootstrap - Layout</a></li>
                            <li><a href="https://github.com/danielfarrell/bootstrap-combobox" target="_blank">Bootstrap Combobox - Custom component</a></li>
                            <li><a href="https://itsjavi.com/bootstrap-colorpicker/" target="_blank">Bootstrap Color Picker - Custom component</a></li>
                            <li><a href="http://tether.io/" target="_blank">Tether - Element positioning</a></li>
                            <li><a href="http://projects.calebevans.me/jcanvas/" target="_blank">jCanvas - Drawing</a></li>
                        </ul>
                        <p>
                            All experimental data are available at <a href="https://github.com/davidbuzatto/CryProteinModelsComparisonData" target="_blank">https://github.com/davidbuzatto/CryProteinModelsComparisonData</a>
                        </p>
                        <p>
                            Developed by David Buzatto - davidbuzatto[at]ifsp.edu.br - <a href="http://davidbuzatto.com.br" target="_blank">http://davidbuzatto.com.br</a>
                        </p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
        
    </body>
</html>
