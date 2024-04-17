import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): number;

export function deletedRow(rowId: RowID): void;

export function updatedRow(rowId: RowID, row: RowElement): RowID;
