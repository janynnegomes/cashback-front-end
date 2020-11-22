export interface Purchase{
    identifier: string;
    ammount: string;
    date: string;
}

export interface PurchasesState{
    purchases: Purchase[];
    currentPurchaseId: string;
    currrentPurchase: Purchase;
    canAddPurchase: boolean;
}
