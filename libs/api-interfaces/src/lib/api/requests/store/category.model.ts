export interface CreateCategoryDto {
  title: string;
  description: string;
}
export interface UpdateCategoryDto {
  title: string;
  description: string;
}
export interface CategoryResource {
  uid: string;
  title: string;
  description: string;
  created_at: Date;
  last_modified_at: Date;
}

export interface CreateCategoryExtraDto {
  title: string;
  data_type: string;
  is_required: boolean;
  category_uid: string;
}
export interface UpdateCategoryExtraDto {
  title: string;
  data_type: string;
  is_required: boolean;
  category_uid: string;
}
export interface CategoryExtraResource {
  title: string;
  data_type: string;
  is_required: boolean;
  category_uid: string;
  created_at: Date;
  last_modified_at: Date;
  category: CategoryResource;
}

export interface CreateCategoryExtraValueDto {
  value: string;
  extra_uid: string;
  category_uid: string;
}
export interface UpdateCategoryExtraValueDto {
  value: string;
  extra_uid: string;
  category_uid: string;
}
export interface CategoryExtraValueResource {
  uid: string;
  value: string;
  extra_uid: string;
  category_uid: string;
  created_at: Date;
  last_modified_at: Date;
}
