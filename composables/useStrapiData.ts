import { Ref } from "vue";

interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
    availableLocales?: string[];
  };
}

interface StrapiError {
  error: {
    status: number;
    name: string;
    message: string;
    details: any;
  };
}

export const useStrapiData = <T>() => {
  const { find, findOne, create, update, delete: remove } = useStrapi();
  const pending = ref(false);
  const error = ref<StrapiError | null>(null);

  const fetchCollection = async (
    collection: string,
    query?: Record<string, any>
  ): Promise<{
    data: Ref<T[]>;
    error: Ref<StrapiError | null>;
    pending: Ref<boolean>;
  }> => {
    const data = ref<T[]>([]);
    pending.value = true;
    error.value = null;

    try {
      const response = await find<StrapiResponse<T[]>>(collection, {
        query,
      });
      data.value = response.data;
    } catch (e) {
      error.value = e as StrapiError;
      console.error("Error fetching collection:", e);
    } finally {
      pending.value = false;
    }

    return {
      data,
      error,
      pending,
    };
  };

  const fetchSingle = async (
    collection: string,
    id: string | number,
    query?: Record<string, any>
  ): Promise<{
    data: Ref<T | null>;
    error: Ref<StrapiError | null>;
    pending: Ref<boolean>;
  }> => {
    const data = ref<T | null>(null);
    pending.value = true;
    error.value = null;

    try {
      const response = await findOne<StrapiResponse<T>>(collection, id, {
        query,
      });
      data.value = response.data;
    } catch (e) {
      error.value = e as StrapiError;
      console.error("Error fetching single item:", e);
    } finally {
      pending.value = false;
    }

    return {
      data,
      error,
      pending,
    };
  };

  return {
    fetchCollection,
    fetchSingle,
    pending,
    error,
  };
};
