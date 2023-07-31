<div className="px-1.5">
            <div className="border-l border-gray-500">
                <Component nombre={'Agua subterránea'} estado={state1.aguaSub} evento={openCloseAguaSub} />
                {
                    state1.aguaSub === 'close'?null:<div className="px-6">
                        <div className="border-l border-gray-500">
                            <Component nombre={'2016'} estado={state2.ano2016} evento={openCloseAno2016} />
                            {
                                state2.ano2016 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Input nombre={'EM TA-12-Temporada 2'} estado={props.estado.em2016T2} evento={props.openCloseEm2016T2} /> 
                                    </div>
                                </div>
                            }
                            <Component nombre={'2017'} estado={state2.ano2017} evento={openCloseAno2017} /> 
                            {
                                state2.ano2017 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Input nombre={'EM TA-12-Temporada 2'} estado={props.estado.em2017T2} evento={props.openCloseEm2017T2} /> 
                                    </div>
                                </div>
                            }
                            <Component nombre={'2018'} estado={state2.ano2018} evento={openCloseAno2018} /> 
                            {
                                state2.ano2018 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Input nombre={'EM TA-12-Temporada 1'} estado={props.estado.em2018T1} evento={props.openCloseEm2018T1} /> 
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <Component nombre={'Agua superficial'} estado={state1.aguaSup} evento={openCloseAguaSup} />
                {
                    state1.aguaSup === 'close'?null:<div className="px-6">
                        <div className="border-l border-gray-500">
                            <Component nombre={'Temporada Húmeda'} estado={state3.tempH} evento={openCloseTempH} />
                            {
                                state3.tempH === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Component nombre={'Parámetros microbiológicos'} estado={sup1.parMic} evento={openCloseParMic} /> 
                                        {
                                            sup1.parMic === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parMicro} evento={props.openCloseHumParMicro} />
                                                </div>
                                            </div>
                                        }
                                        <Component nombre={'Parámetros orgánicos'} estado={sup1.parOrg} evento={openCloseParOrg} />
                                        {
                                            sup1.parOrg === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parOrg} evento={props.openCloseHumParOrg} />
                                                </div>
                                            </div>
                                        }
                                        <Component nombre={'Parámetros fisicoquímicos'} estado={sup1.parFis} evento={openCloseParFis} /> 
                                        {
                                            sup1.parFis === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parFis} evento={props.openCloseHumParFis} />
                                                </div>
                                            </div>
                                        }
                                        <Component nombre={'Parámetros in situ'} estado={sup1.parIn} evento={openCloseParIn} />
                                        {
                                            sup1.parIn === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parIn} evento={props.openCloseHumParIn} />
                                                </div>
                                            </div> 
                                        }
                                        <Component nombre={'Parámetros inorgánicos'} estado={sup1.parIno} evento={openCloseParIno} /> 
                                        {
                                            sup1.parIno === 'close'?null:<div className="px-6">
                                                <div className="border-l border-gray-500">
                                                    <Input nombre={'EM R-2'} estado={props.humeda.parIno} evento={props.openCloseHumParIno} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                            <Component nombre={'Temporada Seca'} estado={state3.tempS} evento={openCloseTempS} />
                            {
                                state3.tempS === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500">
                                        <Component nombre={'Parámetros microbiológicos'} estado={''} evento={openCloseAguaSub} /> 
                                        <Component nombre={'Parámetros orgánicos'} estado={''} evento={openCloseAguaSub} />
                                        <Component nombre={'Parámetros fisicoquímicos'} estado={''} evento={openCloseAguaSub} /> 
                                        <Component nombre={'Parámetros in situ'} estado={''} evento={openCloseAguaSub} /> 
                                        <Component nombre={'Parámetros inorgánicos'} estado={''} evento={openCloseAguaSub} /> 
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <Component nombre={'Puntos de vertimiento'} estado={state1.puntVert} evento={openClosePuntVert} /> 
                {
                    state1.puntVert === 'close'?null:<div className="px-6">
                    <div className="border-l border-gray-500">
                        <Component nombre={'2016'} estado={state1.puntVert} evento={openClosePuntVert} /> 
                        {
                            state4.vert2016 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500 px-6">
                                        <Input nombre={'Enero'} estado={state2.eca} evento={''} />
                                        <Input nombre={'Febrero'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Marzo'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Abril'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Mayo'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Junio'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Julio'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Agosto'} estado={state2.eca} evento={''} /> 
                                        <Input nombre={'Setiembre'} estado={state2.eca} evento={''} />
                                        <Input nombre={'Octubre'} estado={state2.eca} evento={''} />
                                        <Input nombre={'Noviembre'} estado={state2.eca} evento={''} />
                                        <Input nombre={'Diciembre'} estado={state2.eca} evento={''} />   
                                    </div>
                                </div>  
                            }  
                            <Component nombre={'2017'} estado={state1.puntVert} evento={openClosePuntVert} /> 
                            {
                                state4.vert2017 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500 px-6">
                                        <h1 className="text-color text-sm">Enero</h1>
                                        <h1 className="text-color text-sm">Febrero</h1>
                                        <h1 className="text-color text-sm">Marzo</h1>
                                        <h1 className="text-color text-sm">Abril</h1>
                                        <h1 className="text-color text-sm">Mayo</h1>
                                        <h1 className="text-color text-sm">Junio</h1>
                                        <h1 className="text-color text-sm">Julio</h1>
                                        <h1 className="text-color text-sm">Agosto</h1>
                                        <h1 className="text-color text-sm">Setiembre</h1>
                                        <h1 className="text-color text-sm">Octubre</h1>
                                        <h1 className="text-color text-sm">Noviembre</h1>
                                        <h1 className="text-color text-sm">Diciembre</h1>
                                    </div>
                                </div> 
                            }
                            <Component nombre={'2018'} estado={state1.puntVert} evento={openClosePuntVert} />
                            {
                                state4.vert2018 === 'close'?null:<div className="px-6">
                                    <div className="border-l border-gray-500 px-6">
                                        <h1 className="text-color text-sm">Enero</h1>
                                        <h1 className="text-color text-sm">Febrero</h1>
                                        <h1 className="text-color text-sm">Marzo</h1>
                                        <h1 className="text-color text-sm">Abril</h1>
                                        <h1 className="text-color text-sm">Mayo</h1>
                                        <h1 className="text-color text-sm">Junio</h1>
                                        <h1 className="text-color text-sm">Julio</h1>
                                        <h1 className="text-color text-sm">Agosto</h1>
                                        <h1 className="text-color text-sm">Setiembre</h1>
                                        <h1 className="text-color text-sm">Octubre</h1>
                                        <h1 className="text-color text-sm">Noviembre</h1>
                                        <h1 className="text-color text-sm">Diciembre</h1>
                                    </div>
                                </div>
                            }
                        <Component nombre={'Temporada seca'} estado={state1.puntVert} evento={openClosePuntVert} />
                    </div>
                </div>
                }
            </div>
        </div>