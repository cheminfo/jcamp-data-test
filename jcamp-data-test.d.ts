import { PartialFile } from "filelist-utils";

export async function getList(): Promise<string[]>;

export async function getFileList(name: string): Promise<PartialFile>;

export async function getData(name: string): Promise<ArrayBuffer>;
