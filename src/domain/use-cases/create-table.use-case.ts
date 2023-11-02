export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

interface CreateTableOptions {
    b: number;
    l?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor
    /**
     * DI - Dependency Injection (Inyección de dependencias)
     */() {}

    execute({ b: base, l = 10 }: CreateTableOptions ) {
        let outputMessage: string = "";
        for (let i = 1; i <= l; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }

        return outputMessage;
    }
}
