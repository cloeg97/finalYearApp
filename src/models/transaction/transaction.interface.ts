export interface transaction {
	$key?: string,
	transactionAmount: number;
	transactionCurrency: string;
	transactionReceiver: string;
	transactionConfirmationFlag?: boolean;
}