import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";


interface RunOptions {
    base: number;
    limit: number;
    show: boolean; 
    name: string;
    destination: string;
}

export class ServerApp {

    static run(options: RunOptions) {
        console.log('Server running...');
        
        const table = new CreateTable().execute({
            b: options.base,
            l: options.limit
        });

        const wasSave = new SaveFile().execute({
            fileContent: table,
            fileName: options.name,
            destination: options.destination
        });

        if (options.show) {
            console.log(table);
        }

        (wasSave) ? 'File saved' : 'File not saved';

    }
}