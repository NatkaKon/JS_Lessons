export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}


export type ChangeCurrencyFieldType = ReturnType<typeof ChangeCurrencyFieldAC>

// @ts-ignore
export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string) => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload:{
            amountOfBYN, amountOfCurrency
        }
    } as const
};

export type ChangeAction = ReturnType<typeof ChangeActionAC>

// @ts-ignore
export const ChangeActionAC = (isBuying: boolean) => {
    return{
        type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        payload:{
            isBuying
        }
    } as const
};

export type ChangeCurrentCurrencyType = ReturnType<typeof –°hangeCurrentCurrencyAC>

// @ts-ignore
export const –°hangeCurrentCurrencyAC = (currentCurrency: string)=> {
    return {
        type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        payload: {
            currentCurrency
        }
    }as const
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;