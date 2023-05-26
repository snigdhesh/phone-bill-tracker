export class CalculatorService {
    finalBill: number = 0;

    setFinalBill(totalBill: number): void {
        this.finalBill = this.finalBill + totalBill;
    }

    getFinalBill(): number {
        return this.finalBill;
    }

}