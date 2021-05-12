const THEME_DARK = "THEME_DARK";
const THEME_LIGHT = "THEME_LIGHT"

export const gDark = () =>({type:THEME_DARK});
export const gLight = () =>({type:THEME_LIGHT})

const darkColor = {font:"#fff",bg:"#100e17",bg2:"#202026"}
const lightColor = {font:"#000",bg:"#fff",bg2:"pink"}

export const initialState = {
    mode: "D",
    color: darkColor
}

export default function GlobalData(state = initialState, action){
    switch(action.type)
    {
        case THEME_DARK:
            return{
                ...state,
                mode: "D",
                color: darkColor
            }
        case THEME_LIGHT:
            return{
                ...state,
                mode: "L",
                color: lightColor
            }
        default:
            return state;
    }
}