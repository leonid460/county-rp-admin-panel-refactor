import { IFilterByResponse } from '../../../types';

interface IFilterByAdaptorParams<T extends object, R> {
  initData: T;
  mainParamKey: keyof T;
  nameParamKey: keyof R;
  valueParamKey: keyof R;
}

export function adaptFilterBy<T extends object, R>(
  filterByFunction: (page: number, data: T) => Promise<IFilterByResponse<R>>,
  { initData, mainParamKey, nameParamKey, valueParamKey }: IFilterByAdaptorParams<T, R>
) {
  return async function (page: number, query: string) {
    const queryObj: T = { ...initData, [mainParamKey]: query };
    const result = await filterByFunction(page, queryObj);
    const { maxPage, allAmount, page: currentPage, items } = result;

    return {
      items: items.map((item) => ({ name: item[nameParamKey], value: item[valueParamKey] })),
      maxPage,
      allAmount,
      page: currentPage
    };
  };
}
