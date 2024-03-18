import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options{
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    context?: HttpContext;
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;

}

export interface Product{
    item_service_no: number;
    part_no : string;//changed
    description: string;

}

export interface Products{
    items: Product[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}

export interface PaginationParams{
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page : number;
    perPage: number;
}
