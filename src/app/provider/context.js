import { createContext, useContext, useState, useCallback, useMemo } from "react";

const Context = createContext()
export function useContextCapas(){
    return useContext(Context)
}
export default function ContextMap({children}){
    const [lim, setLim] = useState({dep:'close', prov:'close', dist:'close'})
    const [layer, setLayer] = useState({layer1:'close',layer2:'close',layer3:'close',layer4:'close',layer5:'close',layer6:'close',layer7:'close',layer8:'close',layer9:'close',layer10:'close',layer11:'close',layer12:'close',layer13:'close',layer14:'close',layer15:'close',layer16:'close',layer17:'close',layer18:'close'})
    const [tor, setTor] = useState({tor1:'open',tor2:'open',tor3:'open',tor4:'close',tor5:'close',tor6:'close',tor7:'close',tor8:'close',tor9:'close',tor10:'close'})
    const openCloseLayer1 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer1:layer.layer1=== 'open'?'close':'open'})},[layer])
    const openCloseLayer2 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer2:layer.layer2=== 'open'?'close':'open'})},[layer])
    const openCloseLayer3 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer3:layer.layer3=== 'open'?'close':'open'})},[layer])
    const openCloseLayer4 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer4:layer.layer4=== 'open'?'close':'open'})},[layer])
    const openCloseLayer5 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer5:layer.layer5=== 'open'?'close':'open'})},[layer])
    const openCloseLayer6 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer6:layer.layer6=== 'open'?'close':'open'})},[layer])
    const openCloseLayer7 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer7:layer.layer7=== 'open'?'close':'open'})},[layer])
    const openCloseLayer8 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer8:layer.layer8=== 'open'?'close':'open'})},[layer])
    const openCloseLayer9 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer9:layer.layer9=== 'open'?'close':'open'})},[layer])
    const openCloseLayer10 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer10:layer.layer10=== 'open'?'close':'open'})},[layer])
    const openCloseLayer11 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer11:layer.layer11=== 'open'?'close':'open'})},[layer])
    const openCloseLayer12 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer12:layer.layer12=== 'open'?'close':'open'})},[layer])
    const openCloseLayer13 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer13:layer.layer13=== 'open'?'close':'open'})},[layer])
    const openCloseLayer14 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer14:layer.layer14=== 'open'?'close':'open'})},[layer])
    const openCloseLayer15 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer15:layer.layer15=== 'open'?'close':'open'})},[layer])
    const openCloseLayer16 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer16:layer.layer16=== 'open'?'close':'open'})},[layer])
    const openCloseLayer17 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer17:layer.layer17=== 'open'?'close':'open'})},[layer])
    const openCloseLayer18 = useCallback((e)=>{e.preventDefault(), setLayer({...layer, layer18:layer.layer18=== 'open'?'close':'open'})},[layer])
    const openCloseDep = useCallback((e)=>{e.preventDefault(), setLim({...lim, dep:lim.dep === 'open'?'close':'open'})},[lim])
    const openCloseProv = useCallback((e)=>{e.preventDefault(), setLim({...lim, prov:lim.prov === 'open'?'close':'open'})},[lim])
    const openCloseDist = useCallback((e)=>{e.preventDefault(), setLim({...lim, dist:lim.dist === 'open'?'close':'open'})},[lim])
    const openCloseTor1 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor1:tor.tor1 === 'open'?'close':'open'})},[tor])
    const openCloseTor2 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor2:tor.tor2 === 'open'?'close':'open'})},[tor])
    const openCloseTor3 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor3:tor.tor3 === 'open'?'close':'open'})},[tor])
    const openCloseTor4 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor4:tor.tor4 === 'open'?'close':'open'})},[tor])
    const openCloseTor5 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor5:tor.tor5 === 'open'?'close':'open'})},[tor])
    const openCloseTor6 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor6:tor.tor6 === 'open'?'close':'open'})},[tor])
    const openCloseTor7 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor7:tor.tor7 === 'open'?'close':'open'})},[tor])
    const openCloseTor8 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor8:tor.tor8 === 'open'?'close':'open'})},[tor])
    const openCloseTor9 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor9:tor.tor9 === 'open'?'close':'open'})},[tor])
    const openCloseTor10 = useCallback((e)=>{e.preventDefault(), setTor({...tor, tor10:tor.tor10 === 'open'?'close':'open'})},[tor])

    const contextValue = useMemo(()=>({
        lim,
        layer,
        tor,
        openCloseTor1,
        openCloseTor2,
        openCloseTor3,
        openCloseTor4,
        openCloseTor5,
        openCloseTor6,
        openCloseTor7,
        openCloseTor8,
        openCloseTor9,
        openCloseTor10,
        openCloseDep,
        openCloseProv,
        openCloseDist,
        openCloseLayer1,
        openCloseLayer2,
        openCloseLayer3,
        openCloseLayer4,
        openCloseLayer5,
        openCloseLayer6,
        openCloseLayer7,
        openCloseLayer8,
        openCloseLayer9,
        openCloseLayer10,
        openCloseLayer11,
        openCloseLayer12,
        openCloseLayer13,
        openCloseLayer14,
        openCloseLayer15,
        openCloseLayer16,
        openCloseLayer17,
        openCloseLayer18,
    }),[lim,layer,tor,openCloseDep,openCloseProv,openCloseDist,
        openCloseLayer1,
        openCloseLayer2,
        openCloseLayer3,
        openCloseLayer4,
        openCloseLayer5,
        openCloseLayer6,
        openCloseLayer7,
        openCloseLayer8,
        openCloseLayer9,
        openCloseLayer10,
        openCloseLayer11,
        openCloseLayer12,
        openCloseLayer13,
        openCloseLayer14,
        openCloseLayer15,
        openCloseLayer16,
        openCloseLayer17,
        openCloseLayer18,
        openCloseTor1,
        openCloseTor2,
        openCloseTor3,
        openCloseTor4,
        openCloseTor5,
        openCloseTor6,
        openCloseTor7,
        openCloseTor8,
        openCloseTor9,
        openCloseTor10,
    ])
    
    return(
        <Context.Provider value={contextValue} >
            {children}
        </Context.Provider>
    );
}