export abstract class BaseEsercizio {
    abstract esegui(): void;

    reset(): void {
        window.location.reload();
    }
}
