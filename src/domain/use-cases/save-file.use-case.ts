import {mkdirSync, writeFile} from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;

}
    
interface Options {
    fileContent: string;
    destination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /** repository: StorageRepository */
    ) { }

    execute({ fileContent, destination = 'outputs', fileName = 'table' }: Options): boolean {
        
        try {
            mkdirSync(destination, { recursive: true });
            writeFile(`${destination}/${fileName}.txt`, fileContent, (error) => {
                if (error) throw error;
                console.log("The file has been saved!");
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
