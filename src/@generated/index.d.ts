import { Prisma } from '@prisma/client';
export declare enum UserScalarFieldEnum {
    id = "id",
    username = "username",
    email = "email",
    password = "password",
    is_active = "is_active",
    created_at = "created_at",
    updated_at = "updated_at",
    deleted_at = "deleted_at"
}
export declare enum StudentScalarFieldEnum {
    id = "id",
    fullname = "fullname",
    phone = "phone",
    grade = "grade",
    profile_pict = "profile_pict",
    is_graduate = "is_graduate",
    userId = "userId",
    created_at = "created_at",
    updated_at = "updated_at",
    deleted_at = "deleted_at"
}
export declare enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}
export declare enum SortOrder {
    asc = "asc",
    desc = "desc"
}
export declare enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}
export declare enum NullsOrder {
    first = "first",
    last = "last"
}
export declare enum Grader {
    X = "X",
    XI = "XI",
    XII = "XII"
}
export declare enum CourseScalarFieldEnum {
    id = "id",
    course_name = "course_name",
    added_at = "added_at",
    studentId = "studentId",
    created_at = "created_at",
    updated_at = "updated_at",
    deleted_at = "deleted_at"
}
export declare class AggregateCourse {
    _count?: InstanceType<typeof CourseCountAggregate>;
    _avg?: InstanceType<typeof CourseAvgAggregate>;
    _sum?: InstanceType<typeof CourseSumAggregate>;
    _min?: InstanceType<typeof CourseMinAggregate>;
    _max?: InstanceType<typeof CourseMaxAggregate>;
}
export declare class CourseAggregateArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CourseCountAggregateInput>;
    _avg?: InstanceType<typeof CourseAvgAggregateInput>;
    _sum?: InstanceType<typeof CourseSumAggregateInput>;
    _min?: InstanceType<typeof CourseMinAggregateInput>;
    _max?: InstanceType<typeof CourseMaxAggregateInput>;
}
export declare class CourseAvgAggregateInput {
    id?: true;
    studentId?: true;
}
export declare class CourseAvgAggregate {
    id?: number;
    studentId?: number;
}
export declare class CourseAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    studentId?: keyof typeof SortOrder;
}
export declare class CourseCountAggregateInput {
    id?: true;
    course_name?: true;
    added_at?: true;
    studentId?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
}
export declare class CourseCountAggregate {
    id: number;
    course_name: number;
    added_at: number;
    studentId: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
}
export declare class CourseCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    course_name?: keyof typeof SortOrder;
    added_at?: keyof typeof SortOrder;
    studentId?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class CourseCreateManyStudentInputEnvelope {
    data: Array<CourseCreateManyStudentInput>;
    skipDuplicates?: boolean;
}
export declare class CourseCreateManyStudentInput {
    id?: number;
    course_name: string;
    added_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class CourseCreateManyInput {
    id?: number;
    course_name: string;
    added_at?: Date | string;
    studentId?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class CourseCreateNestedManyWithoutStudentInput {
    create?: Array<CourseCreateWithoutStudentInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutStudentInput>;
    createMany?: InstanceType<typeof CourseCreateManyStudentInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseCreateOrConnectWithoutStudentInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CourseCreateWithoutStudentInput>;
}
export declare class CourseCreateWithoutStudentInput {
    course_name: string;
    added_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class CourseCreateInput {
    course_name: string;
    added_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
    Student?: InstanceType<typeof StudentCreateNestedOneWithoutCoursesInput>;
}
export declare class CourseGroupByArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithAggregationInput>;
    by: Array<keyof typeof CourseScalarFieldEnum>;
    having?: InstanceType<typeof CourseScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof CourseCountAggregateInput>;
    _avg?: InstanceType<typeof CourseAvgAggregateInput>;
    _sum?: InstanceType<typeof CourseSumAggregateInput>;
    _min?: InstanceType<typeof CourseMinAggregateInput>;
    _max?: InstanceType<typeof CourseMaxAggregateInput>;
}
export declare class CourseGroupBy {
    id: number;
    course_name: string;
    added_at: Date | string;
    studentId?: number;
    created_at: Date | string;
    updated_at: Date | string;
    deleted_at?: Date | string;
    _count?: InstanceType<typeof CourseCountAggregate>;
    _avg?: InstanceType<typeof CourseAvgAggregate>;
    _sum?: InstanceType<typeof CourseSumAggregate>;
    _min?: InstanceType<typeof CourseMinAggregate>;
    _max?: InstanceType<typeof CourseMaxAggregate>;
}
export declare class CourseListRelationFilter {
    every?: InstanceType<typeof CourseWhereInput>;
    some?: InstanceType<typeof CourseWhereInput>;
    none?: InstanceType<typeof CourseWhereInput>;
}
export declare class CourseMaxAggregateInput {
    id?: true;
    course_name?: true;
    added_at?: true;
    studentId?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
}
export declare class CourseMaxAggregate {
    id?: number;
    course_name?: string;
    added_at?: Date | string;
    studentId?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class CourseMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    course_name?: keyof typeof SortOrder;
    added_at?: keyof typeof SortOrder;
    studentId?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class CourseMinAggregateInput {
    id?: true;
    course_name?: true;
    added_at?: true;
    studentId?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
}
export declare class CourseMinAggregate {
    id?: number;
    course_name?: string;
    added_at?: Date | string;
    studentId?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class CourseMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    course_name?: keyof typeof SortOrder;
    added_at?: keyof typeof SortOrder;
    studentId?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class CourseOrderByRelationAggregateInput {
    _count?: keyof typeof SortOrder;
}
export declare class CourseOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    course_name?: keyof typeof SortOrder;
    added_at?: keyof typeof SortOrder;
    studentId?: InstanceType<typeof SortOrderInput>;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof CourseCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof CourseAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof CourseMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof CourseMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof CourseSumOrderByAggregateInput>;
}
export declare class CourseOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    course_name?: keyof typeof SortOrder;
    added_at?: keyof typeof SortOrder;
    studentId?: InstanceType<typeof SortOrderInput>;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: InstanceType<typeof SortOrderInput>;
    Student?: InstanceType<typeof StudentOrderByWithRelationInput>;
}
export declare class CourseScalarWhereWithAggregatesInput {
    AND?: Array<CourseScalarWhereWithAggregatesInput>;
    OR?: Array<CourseScalarWhereWithAggregatesInput>;
    NOT?: Array<CourseScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    course_name?: InstanceType<typeof StringWithAggregatesFilter>;
    added_at?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    studentId?: InstanceType<typeof IntNullableWithAggregatesFilter>;
    created_at?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updated_at?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class CourseScalarWhereInput {
    AND?: Array<CourseScalarWhereInput>;
    OR?: Array<CourseScalarWhereInput>;
    NOT?: Array<CourseScalarWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    course_name?: InstanceType<typeof StringFilter>;
    added_at?: InstanceType<typeof DateTimeFilter>;
    studentId?: InstanceType<typeof IntNullableFilter>;
    created_at?: InstanceType<typeof DateTimeFilter>;
    updated_at?: InstanceType<typeof DateTimeFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableFilter>;
}
export declare class CourseSumAggregateInput {
    id?: true;
    studentId?: true;
}
export declare class CourseSumAggregate {
    id?: number;
    studentId?: number;
}
export declare class CourseSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    studentId?: keyof typeof SortOrder;
}
export declare class CourseUncheckedCreateNestedManyWithoutStudentInput {
    create?: Array<CourseCreateWithoutStudentInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutStudentInput>;
    createMany?: InstanceType<typeof CourseCreateManyStudentInputEnvelope>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
}
export declare class CourseUncheckedCreateWithoutStudentInput {
    id?: number;
    course_name: string;
    added_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class CourseUncheckedCreateInput {
    id?: number;
    course_name: string;
    added_at?: Date | string;
    studentId?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class CourseUncheckedUpdateManyWithoutStudentNestedInput {
    create?: Array<CourseCreateWithoutStudentInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutStudentInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutStudentInput>;
    createMany?: InstanceType<typeof CourseCreateManyStudentInputEnvelope>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutStudentInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutStudentInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUncheckedUpdateManyWithoutStudentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    course_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    added_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    course_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    added_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    studentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateWithoutStudentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    course_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    added_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class CourseUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    course_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    added_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    studentId?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class CourseUpdateManyMutationInput {
    course_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    added_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class CourseUpdateManyWithWhereWithoutStudentInput {
    where: InstanceType<typeof CourseScalarWhereInput>;
    data: InstanceType<typeof CourseUpdateManyMutationInput>;
}
export declare class CourseUpdateManyWithoutStudentNestedInput {
    create?: Array<CourseCreateWithoutStudentInput>;
    connectOrCreate?: Array<CourseCreateOrConnectWithoutStudentInput>;
    upsert?: Array<CourseUpsertWithWhereUniqueWithoutStudentInput>;
    createMany?: InstanceType<typeof CourseCreateManyStudentInputEnvelope>;
    set?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    disconnect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    delete?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    connect?: Array<Prisma.AtLeast<CourseWhereUniqueInput, 'id'>>;
    update?: Array<CourseUpdateWithWhereUniqueWithoutStudentInput>;
    updateMany?: Array<CourseUpdateManyWithWhereWithoutStudentInput>;
    deleteMany?: Array<CourseScalarWhereInput>;
}
export declare class CourseUpdateWithWhereUniqueWithoutStudentInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    data: InstanceType<typeof CourseUpdateWithoutStudentInput>;
}
export declare class CourseUpdateWithoutStudentInput {
    course_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    added_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class CourseUpdateInput {
    course_name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    added_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    Student?: InstanceType<typeof StudentUpdateOneWithoutCoursesNestedInput>;
}
export declare class CourseUpsertWithWhereUniqueWithoutStudentInput {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    update: InstanceType<typeof CourseUpdateWithoutStudentInput>;
    create: InstanceType<typeof CourseCreateWithoutStudentInput>;
}
export declare class CourseWhereUniqueInput {
    id?: number;
    AND?: Array<CourseWhereInput>;
    OR?: Array<CourseWhereInput>;
    NOT?: Array<CourseWhereInput>;
    course_name?: InstanceType<typeof StringFilter>;
    added_at?: InstanceType<typeof DateTimeFilter>;
    studentId?: InstanceType<typeof IntNullableFilter>;
    created_at?: InstanceType<typeof DateTimeFilter>;
    updated_at?: InstanceType<typeof DateTimeFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableFilter>;
    Student?: InstanceType<typeof StudentNullableRelationFilter>;
}
export declare class CourseWhereInput {
    AND?: Array<CourseWhereInput>;
    OR?: Array<CourseWhereInput>;
    NOT?: Array<CourseWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    course_name?: InstanceType<typeof StringFilter>;
    added_at?: InstanceType<typeof DateTimeFilter>;
    studentId?: InstanceType<typeof IntNullableFilter>;
    created_at?: InstanceType<typeof DateTimeFilter>;
    updated_at?: InstanceType<typeof DateTimeFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableFilter>;
    Student?: InstanceType<typeof StudentNullableRelationFilter>;
}
export declare class Course {
    id: number;
    course_name: string;
    added_at: Date;
    studentId: number | null;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    Student?: InstanceType<typeof Student> | null;
}
export declare class CreateManyCourseArgs {
    data: Array<CourseCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneCourseArgs {
    data: InstanceType<typeof CourseCreateInput>;
}
export declare class DeleteManyCourseArgs {
    where?: InstanceType<typeof CourseWhereInput>;
}
export declare class DeleteOneCourseArgs {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
}
export declare class FindFirstCourseOrThrowArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CourseScalarFieldEnum>;
}
export declare class FindFirstCourseArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CourseScalarFieldEnum>;
}
export declare class FindManyCourseArgs {
    where?: InstanceType<typeof CourseWhereInput>;
    orderBy?: Array<CourseOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof CourseScalarFieldEnum>;
}
export declare class FindUniqueCourseOrThrowArgs {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
}
export declare class FindUniqueCourseArgs {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
}
export declare class UpdateManyCourseArgs {
    data: InstanceType<typeof CourseUpdateManyMutationInput>;
    where?: InstanceType<typeof CourseWhereInput>;
}
export declare class UpdateOneCourseArgs {
    data: InstanceType<typeof CourseUpdateInput>;
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
}
export declare class UpsertOneCourseArgs {
    where: Prisma.AtLeast<CourseWhereUniqueInput, 'id'>;
    create: InstanceType<typeof CourseCreateInput>;
    update: InstanceType<typeof CourseUpdateInput>;
}
export declare class AffectedRows {
    count: number;
}
export declare class BoolFieldUpdateOperationsInput {
    set?: boolean;
}
export declare class BoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class BoolNullableFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolNullableFilter>;
}
export declare class BoolNullableWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedBoolNullableFilter>;
    _max?: InstanceType<typeof NestedBoolNullableFilter>;
}
export declare class BoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class DateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class DateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class DateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class DateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class EnumGraderFieldUpdateOperationsInput {
    set?: keyof typeof Grader;
}
export declare class EnumGraderFilter {
    equals?: keyof typeof Grader;
    in?: Array<keyof typeof Grader>;
    notIn?: Array<keyof typeof Grader>;
    not?: InstanceType<typeof NestedEnumGraderFilter>;
}
export declare class EnumGraderWithAggregatesFilter {
    equals?: keyof typeof Grader;
    in?: Array<keyof typeof Grader>;
    notIn?: Array<keyof typeof Grader>;
    not?: InstanceType<typeof NestedEnumGraderWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumGraderFilter>;
    _max?: InstanceType<typeof NestedEnumGraderFilter>;
}
export declare class IntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class IntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class IntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class IntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedBoolFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedBoolNullableFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolNullableFilter>;
}
export declare class NestedBoolNullableWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedBoolNullableFilter>;
    _max?: InstanceType<typeof NestedBoolNullableFilter>;
}
export declare class NestedBoolWithAggregatesFilter {
    equals?: boolean;
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedBoolFilter>;
    _max?: InstanceType<typeof NestedBoolFilter>;
}
export declare class NestedDateTimeFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedDateTimeNullableFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeNullableWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
    _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}
export declare class NestedDateTimeWithAggregatesFilter {
    equals?: Date | string;
    in?: Array<Date> | Array<string>;
    notIn?: Array<Date> | Array<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedDateTimeFilter>;
    _max?: InstanceType<typeof NestedDateTimeFilter>;
}
export declare class NestedEnumGraderFilter {
    equals?: keyof typeof Grader;
    in?: Array<keyof typeof Grader>;
    notIn?: Array<keyof typeof Grader>;
    not?: InstanceType<typeof NestedEnumGraderFilter>;
}
export declare class NestedEnumGraderWithAggregatesFilter {
    equals?: keyof typeof Grader;
    in?: Array<keyof typeof Grader>;
    notIn?: Array<keyof typeof Grader>;
    not?: InstanceType<typeof NestedEnumGraderWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedEnumGraderFilter>;
    _max?: InstanceType<typeof NestedEnumGraderFilter>;
}
export declare class NestedFloatFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatFilter>;
}
export declare class NestedFloatNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedFloatNullableFilter>;
}
export declare class NestedIntFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedIntNullableFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntNullableWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _avg?: InstanceType<typeof NestedFloatNullableFilter>;
    _sum?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedIntNullableFilter>;
    _max?: InstanceType<typeof NestedIntNullableFilter>;
}
export declare class NestedIntWithAggregatesFilter {
    equals?: number;
    in?: Array<number>;
    notIn?: Array<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _avg?: InstanceType<typeof NestedFloatFilter>;
    _sum?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedIntFilter>;
    _max?: InstanceType<typeof NestedIntFilter>;
}
export declare class NestedStringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class NestedStringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class NestedStringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class NullableBoolFieldUpdateOperationsInput {
    set?: boolean;
}
export declare class NullableDateTimeFieldUpdateOperationsInput {
    set?: Date | string;
}
export declare class NullableIntFieldUpdateOperationsInput {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
}
export declare class NullableStringFieldUpdateOperationsInput {
    set?: string;
}
export declare class SortOrderInput {
    sort: keyof typeof SortOrder;
    nulls?: keyof typeof NullsOrder;
}
export declare class StringFieldUpdateOperationsInput {
    set?: string;
}
export declare class StringFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringFilter>;
}
export declare class StringNullableFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringNullableWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}
export declare class StringWithAggregatesFilter {
    equals?: string;
    in?: Array<string>;
    notIn?: Array<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: keyof typeof QueryMode;
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    _count?: InstanceType<typeof NestedIntFilter>;
    _min?: InstanceType<typeof NestedStringFilter>;
    _max?: InstanceType<typeof NestedStringFilter>;
}
export declare class AggregateStudent {
    _count?: InstanceType<typeof StudentCountAggregate>;
    _avg?: InstanceType<typeof StudentAvgAggregate>;
    _sum?: InstanceType<typeof StudentSumAggregate>;
    _min?: InstanceType<typeof StudentMinAggregate>;
    _max?: InstanceType<typeof StudentMaxAggregate>;
}
export declare class CreateManyStudentArgs {
    data: Array<StudentCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneStudentArgs {
    data: InstanceType<typeof StudentCreateInput>;
}
export declare class DeleteManyStudentArgs {
    where?: InstanceType<typeof StudentWhereInput>;
}
export declare class DeleteOneStudentArgs {
    where: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
}
export declare class FindFirstStudentOrThrowArgs {
    where?: InstanceType<typeof StudentWhereInput>;
    orderBy?: Array<StudentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof StudentScalarFieldEnum>;
}
export declare class FindFirstStudentArgs {
    where?: InstanceType<typeof StudentWhereInput>;
    orderBy?: Array<StudentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof StudentScalarFieldEnum>;
}
export declare class FindManyStudentArgs {
    where?: InstanceType<typeof StudentWhereInput>;
    orderBy?: Array<StudentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof StudentScalarFieldEnum>;
}
export declare class FindUniqueStudentOrThrowArgs {
    where: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
}
export declare class FindUniqueStudentArgs {
    where: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
}
export declare class StudentAggregateArgs {
    where?: InstanceType<typeof StudentWhereInput>;
    orderBy?: Array<StudentOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof StudentCountAggregateInput>;
    _avg?: InstanceType<typeof StudentAvgAggregateInput>;
    _sum?: InstanceType<typeof StudentSumAggregateInput>;
    _min?: InstanceType<typeof StudentMinAggregateInput>;
    _max?: InstanceType<typeof StudentMaxAggregateInput>;
}
export declare class StudentAvgAggregateInput {
    id?: true;
    phone?: true;
    userId?: true;
}
export declare class StudentAvgAggregate {
    id?: number;
    phone?: number;
    userId?: number;
}
export declare class StudentAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    phone?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class StudentCountAggregateInput {
    id?: true;
    fullname?: true;
    phone?: true;
    grade?: true;
    profile_pict?: true;
    is_graduate?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
}
export declare class StudentCountAggregate {
    id: number;
    fullname: number;
    phone: number;
    grade: number;
    profile_pict: number;
    is_graduate: number;
    userId: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
}
export declare class StudentCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullname?: keyof typeof SortOrder;
    phone?: keyof typeof SortOrder;
    grade?: keyof typeof SortOrder;
    profile_pict?: keyof typeof SortOrder;
    is_graduate?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class StudentCount {
    courses?: number;
}
export declare class StudentCreateManyInput {
    id?: number;
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    userId: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class StudentCreateNestedOneWithoutCoursesInput {
    create?: InstanceType<typeof StudentCreateWithoutCoursesInput>;
    connectOrCreate?: InstanceType<typeof StudentCreateOrConnectWithoutCoursesInput>;
    connect?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
}
export declare class StudentCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof StudentCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof StudentCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
}
export declare class StudentCreateOrConnectWithoutCoursesInput {
    where: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    create: InstanceType<typeof StudentCreateWithoutCoursesInput>;
}
export declare class StudentCreateOrConnectWithoutUserInput {
    where: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    create: InstanceType<typeof StudentCreateWithoutUserInput>;
}
export declare class StudentCreateWithoutCoursesInput {
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutStudentInput>;
}
export declare class StudentCreateWithoutUserInput {
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutStudentInput>;
}
export declare class StudentCreateInput {
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
    user: InstanceType<typeof UserCreateNestedOneWithoutStudentInput>;
    courses?: InstanceType<typeof CourseCreateNestedManyWithoutStudentInput>;
}
export declare class StudentGroupByArgs {
    where?: InstanceType<typeof StudentWhereInput>;
    orderBy?: Array<StudentOrderByWithAggregationInput>;
    by: Array<keyof typeof StudentScalarFieldEnum>;
    having?: InstanceType<typeof StudentScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof StudentCountAggregateInput>;
    _avg?: InstanceType<typeof StudentAvgAggregateInput>;
    _sum?: InstanceType<typeof StudentSumAggregateInput>;
    _min?: InstanceType<typeof StudentMinAggregateInput>;
    _max?: InstanceType<typeof StudentMaxAggregateInput>;
}
export declare class StudentGroupBy {
    id: number;
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    userId: number;
    created_at: Date | string;
    updated_at: Date | string;
    deleted_at?: Date | string;
    _count?: InstanceType<typeof StudentCountAggregate>;
    _avg?: InstanceType<typeof StudentAvgAggregate>;
    _sum?: InstanceType<typeof StudentSumAggregate>;
    _min?: InstanceType<typeof StudentMinAggregate>;
    _max?: InstanceType<typeof StudentMaxAggregate>;
}
export declare class StudentMaxAggregateInput {
    id?: true;
    fullname?: true;
    phone?: true;
    grade?: true;
    profile_pict?: true;
    is_graduate?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
}
export declare class StudentMaxAggregate {
    id?: number;
    fullname?: string;
    phone?: number;
    grade?: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    userId?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class StudentMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullname?: keyof typeof SortOrder;
    phone?: keyof typeof SortOrder;
    grade?: keyof typeof SortOrder;
    profile_pict?: keyof typeof SortOrder;
    is_graduate?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class StudentMinAggregateInput {
    id?: true;
    fullname?: true;
    phone?: true;
    grade?: true;
    profile_pict?: true;
    is_graduate?: true;
    userId?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
}
export declare class StudentMinAggregate {
    id?: number;
    fullname?: string;
    phone?: number;
    grade?: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    userId?: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class StudentMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    fullname?: keyof typeof SortOrder;
    phone?: keyof typeof SortOrder;
    grade?: keyof typeof SortOrder;
    profile_pict?: keyof typeof SortOrder;
    is_graduate?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class StudentNullableRelationFilter {
    is?: InstanceType<typeof StudentWhereInput>;
    isNot?: InstanceType<typeof StudentWhereInput>;
}
export declare class StudentOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    fullname?: keyof typeof SortOrder;
    phone?: keyof typeof SortOrder;
    grade?: keyof typeof SortOrder;
    profile_pict?: InstanceType<typeof SortOrderInput>;
    is_graduate?: InstanceType<typeof SortOrderInput>;
    userId?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof StudentCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof StudentAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof StudentMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof StudentMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof StudentSumOrderByAggregateInput>;
}
export declare class StudentOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    fullname?: keyof typeof SortOrder;
    phone?: keyof typeof SortOrder;
    grade?: keyof typeof SortOrder;
    profile_pict?: InstanceType<typeof SortOrderInput>;
    is_graduate?: InstanceType<typeof SortOrderInput>;
    userId?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: InstanceType<typeof SortOrderInput>;
    user?: InstanceType<typeof UserOrderByWithRelationInput>;
    courses?: InstanceType<typeof CourseOrderByRelationAggregateInput>;
}
export declare class StudentScalarWhereWithAggregatesInput {
    AND?: Array<StudentScalarWhereWithAggregatesInput>;
    OR?: Array<StudentScalarWhereWithAggregatesInput>;
    NOT?: Array<StudentScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    fullname?: InstanceType<typeof StringWithAggregatesFilter>;
    phone?: InstanceType<typeof IntWithAggregatesFilter>;
    grade?: InstanceType<typeof EnumGraderWithAggregatesFilter>;
    profile_pict?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    is_graduate?: InstanceType<typeof BoolNullableWithAggregatesFilter>;
    userId?: InstanceType<typeof IntWithAggregatesFilter>;
    created_at?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updated_at?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class StudentSumAggregateInput {
    id?: true;
    phone?: true;
    userId?: true;
}
export declare class StudentSumAggregate {
    id?: number;
    phone?: number;
    userId?: number;
}
export declare class StudentSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    phone?: keyof typeof SortOrder;
    userId?: keyof typeof SortOrder;
}
export declare class StudentUncheckedCreateNestedOneWithoutUserInput {
    create?: InstanceType<typeof StudentCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof StudentCreateOrConnectWithoutUserInput>;
    connect?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
}
export declare class StudentUncheckedCreateWithoutCoursesInput {
    id?: number;
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    userId: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class StudentUncheckedCreateWithoutUserInput {
    id?: number;
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutStudentInput>;
}
export declare class StudentUncheckedCreateInput {
    id?: number;
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict?: string;
    is_graduate?: boolean;
    userId: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
    courses?: InstanceType<typeof CourseUncheckedCreateNestedManyWithoutStudentInput>;
}
export declare class StudentUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    phone?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof EnumGraderFieldUpdateOperationsInput>;
    profile_pict?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    is_graduate?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class StudentUncheckedUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof StudentCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof StudentCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof StudentUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof StudentWhereInput>;
    delete?: InstanceType<typeof StudentWhereInput>;
    connect?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    update?: InstanceType<typeof StudentUpdateToOneWithWhereWithoutUserInput>;
}
export declare class StudentUncheckedUpdateWithoutCoursesInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    phone?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof EnumGraderFieldUpdateOperationsInput>;
    profile_pict?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    is_graduate?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class StudentUncheckedUpdateWithoutUserInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    phone?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof EnumGraderFieldUpdateOperationsInput>;
    profile_pict?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    is_graduate?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutStudentNestedInput>;
}
export declare class StudentUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    phone?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof EnumGraderFieldUpdateOperationsInput>;
    profile_pict?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    is_graduate?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    userId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUncheckedUpdateManyWithoutStudentNestedInput>;
}
export declare class StudentUpdateManyMutationInput {
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    phone?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof EnumGraderFieldUpdateOperationsInput>;
    profile_pict?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    is_graduate?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class StudentUpdateOneWithoutCoursesNestedInput {
    create?: InstanceType<typeof StudentCreateWithoutCoursesInput>;
    connectOrCreate?: InstanceType<typeof StudentCreateOrConnectWithoutCoursesInput>;
    upsert?: InstanceType<typeof StudentUpsertWithoutCoursesInput>;
    disconnect?: InstanceType<typeof StudentWhereInput>;
    delete?: InstanceType<typeof StudentWhereInput>;
    connect?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    update?: InstanceType<typeof StudentUpdateToOneWithWhereWithoutCoursesInput>;
}
export declare class StudentUpdateOneWithoutUserNestedInput {
    create?: InstanceType<typeof StudentCreateWithoutUserInput>;
    connectOrCreate?: InstanceType<typeof StudentCreateOrConnectWithoutUserInput>;
    upsert?: InstanceType<typeof StudentUpsertWithoutUserInput>;
    disconnect?: InstanceType<typeof StudentWhereInput>;
    delete?: InstanceType<typeof StudentWhereInput>;
    connect?: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    update?: InstanceType<typeof StudentUpdateToOneWithWhereWithoutUserInput>;
}
export declare class StudentUpdateToOneWithWhereWithoutCoursesInput {
    where?: InstanceType<typeof StudentWhereInput>;
    data: InstanceType<typeof StudentUpdateWithoutCoursesInput>;
}
export declare class StudentUpdateToOneWithWhereWithoutUserInput {
    where?: InstanceType<typeof StudentWhereInput>;
    data: InstanceType<typeof StudentUpdateWithoutUserInput>;
}
export declare class StudentUpdateWithoutCoursesInput {
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    phone?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof EnumGraderFieldUpdateOperationsInput>;
    profile_pict?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    is_graduate?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutStudentNestedInput>;
}
export declare class StudentUpdateWithoutUserInput {
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    phone?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof EnumGraderFieldUpdateOperationsInput>;
    profile_pict?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    is_graduate?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutStudentNestedInput>;
}
export declare class StudentUpdateInput {
    fullname?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    phone?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    grade?: InstanceType<typeof EnumGraderFieldUpdateOperationsInput>;
    profile_pict?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    is_graduate?: InstanceType<typeof NullableBoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    user?: InstanceType<typeof UserUpdateOneRequiredWithoutStudentNestedInput>;
    courses?: InstanceType<typeof CourseUpdateManyWithoutStudentNestedInput>;
}
export declare class StudentUpsertWithoutCoursesInput {
    update: InstanceType<typeof StudentUpdateWithoutCoursesInput>;
    create: InstanceType<typeof StudentCreateWithoutCoursesInput>;
    where?: InstanceType<typeof StudentWhereInput>;
}
export declare class StudentUpsertWithoutUserInput {
    update: InstanceType<typeof StudentUpdateWithoutUserInput>;
    create: InstanceType<typeof StudentCreateWithoutUserInput>;
    where?: InstanceType<typeof StudentWhereInput>;
}
export declare class StudentWhereUniqueInput {
    id?: number;
    phone?: number;
    userId?: number;
    AND?: Array<StudentWhereInput>;
    OR?: Array<StudentWhereInput>;
    NOT?: Array<StudentWhereInput>;
    fullname?: InstanceType<typeof StringFilter>;
    grade?: InstanceType<typeof EnumGraderFilter>;
    profile_pict?: InstanceType<typeof StringNullableFilter>;
    is_graduate?: InstanceType<typeof BoolNullableFilter>;
    created_at?: InstanceType<typeof DateTimeFilter>;
    updated_at?: InstanceType<typeof DateTimeFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
}
export declare class StudentWhereInput {
    AND?: Array<StudentWhereInput>;
    OR?: Array<StudentWhereInput>;
    NOT?: Array<StudentWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    fullname?: InstanceType<typeof StringFilter>;
    phone?: InstanceType<typeof IntFilter>;
    grade?: InstanceType<typeof EnumGraderFilter>;
    profile_pict?: InstanceType<typeof StringNullableFilter>;
    is_graduate?: InstanceType<typeof BoolNullableFilter>;
    userId?: InstanceType<typeof IntFilter>;
    created_at?: InstanceType<typeof DateTimeFilter>;
    updated_at?: InstanceType<typeof DateTimeFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableFilter>;
    user?: InstanceType<typeof UserRelationFilter>;
    courses?: InstanceType<typeof CourseListRelationFilter>;
}
export declare class Student {
    id: number;
    fullname: string;
    phone: number;
    grade: keyof typeof Grader;
    profile_pict: string | null;
    is_graduate: boolean | null;
    userId: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    user?: InstanceType<typeof User>;
    courses?: Array<Course>;
    _count?: InstanceType<typeof StudentCount>;
}
export declare class UpdateManyStudentArgs {
    data: InstanceType<typeof StudentUpdateManyMutationInput>;
    where?: InstanceType<typeof StudentWhereInput>;
}
export declare class UpdateOneStudentArgs {
    data: InstanceType<typeof StudentUpdateInput>;
    where: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
}
export declare class UpsertOneStudentArgs {
    where: Prisma.AtLeast<StudentWhereUniqueInput, 'id' | 'phone' | 'userId'>;
    create: InstanceType<typeof StudentCreateInput>;
    update: InstanceType<typeof StudentUpdateInput>;
}
export declare class AggregateUser {
    _count?: InstanceType<typeof UserCountAggregate>;
    _avg?: InstanceType<typeof UserAvgAggregate>;
    _sum?: InstanceType<typeof UserSumAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class CreateManyUserArgs {
    data: Array<UserCreateManyInput>;
    skipDuplicates?: boolean;
}
export declare class CreateOneUserArgs {
    data: InstanceType<typeof UserCreateInput>;
}
export declare class DeleteManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class DeleteOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class FindFirstUserOrThrowArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindFirstUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindManyUserArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    take?: number;
    skip?: number;
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}
export declare class FindUniqueUserOrThrowArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class FindUniqueUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UpdateManyUserArgs {
    data: InstanceType<typeof UserUpdateManyMutationInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UpdateOneUserArgs {
    data: InstanceType<typeof UserUpdateInput>;
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UpsertOneUserArgs {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateInput>;
    update: InstanceType<typeof UserUpdateInput>;
}
export declare class UserAggregateArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithRelationInput>;
    cursor?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserAvgAggregateInput {
    id?: true;
}
export declare class UserAvgAggregate {
    id?: number;
}
export declare class UserAvgOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class UserCountAggregateInput {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
    _all?: true;
}
export declare class UserCountAggregate {
    id: number;
    username: number;
    email: number;
    password: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    deleted_at: number;
    _all: number;
}
export declare class UserCountOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    is_active?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class UserCreateManyInput {
    id?: number;
    username: string;
    email: string;
    password: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class UserCreateNestedOneWithoutStudentInput {
    create?: InstanceType<typeof UserCreateWithoutStudentInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutStudentInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
export declare class UserCreateOrConnectWithoutStudentInput {
    where: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    create: InstanceType<typeof UserCreateWithoutStudentInput>;
}
export declare class UserCreateWithoutStudentInput {
    username: string;
    email: string;
    password: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class UserCreateInput {
    username: string;
    email: string;
    password: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
    student?: InstanceType<typeof StudentCreateNestedOneWithoutUserInput>;
}
export declare class UserGroupByArgs {
    where?: InstanceType<typeof UserWhereInput>;
    orderBy?: Array<UserOrderByWithAggregationInput>;
    by: Array<keyof typeof UserScalarFieldEnum>;
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    take?: number;
    skip?: number;
    _count?: InstanceType<typeof UserCountAggregateInput>;
    _avg?: InstanceType<typeof UserAvgAggregateInput>;
    _sum?: InstanceType<typeof UserSumAggregateInput>;
    _min?: InstanceType<typeof UserMinAggregateInput>;
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}
export declare class UserGroupBy {
    id: number;
    username: string;
    email: string;
    password: string;
    is_active: boolean;
    created_at: Date | string;
    updated_at: Date | string;
    deleted_at?: Date | string;
    _count?: InstanceType<typeof UserCountAggregate>;
    _avg?: InstanceType<typeof UserAvgAggregate>;
    _sum?: InstanceType<typeof UserSumAggregate>;
    _min?: InstanceType<typeof UserMinAggregate>;
    _max?: InstanceType<typeof UserMaxAggregate>;
}
export declare class UserMaxAggregateInput {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
}
export declare class UserMaxAggregate {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class UserMaxOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    is_active?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class UserMinAggregateInput {
    id?: true;
    username?: true;
    email?: true;
    password?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    deleted_at?: true;
}
export declare class UserMinAggregate {
    id?: number;
    username?: string;
    email?: string;
    password?: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class UserMinOrderByAggregateInput {
    id?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    is_active?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: keyof typeof SortOrder;
}
export declare class UserOrderByWithAggregationInput {
    id?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    is_active?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: InstanceType<typeof SortOrderInput>;
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    _avg?: InstanceType<typeof UserAvgOrderByAggregateInput>;
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
    _sum?: InstanceType<typeof UserSumOrderByAggregateInput>;
}
export declare class UserOrderByWithRelationInput {
    id?: keyof typeof SortOrder;
    username?: keyof typeof SortOrder;
    email?: keyof typeof SortOrder;
    password?: keyof typeof SortOrder;
    is_active?: keyof typeof SortOrder;
    created_at?: keyof typeof SortOrder;
    updated_at?: keyof typeof SortOrder;
    deleted_at?: InstanceType<typeof SortOrderInput>;
    student?: InstanceType<typeof StudentOrderByWithRelationInput>;
}
export declare class UserRelationFilter {
    is?: InstanceType<typeof UserWhereInput>;
    isNot?: InstanceType<typeof UserWhereInput>;
}
export declare class UserScalarWhereWithAggregatesInput {
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    username?: InstanceType<typeof StringWithAggregatesFilter>;
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    password?: InstanceType<typeof StringWithAggregatesFilter>;
    is_active?: InstanceType<typeof BoolWithAggregatesFilter>;
    created_at?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    updated_at?: InstanceType<typeof DateTimeWithAggregatesFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
}
export declare class UserSumAggregateInput {
    id?: true;
}
export declare class UserSumAggregate {
    id?: number;
}
export declare class UserSumOrderByAggregateInput {
    id?: keyof typeof SortOrder;
}
export declare class UserUncheckedCreateWithoutStudentInput {
    id?: number;
    username: string;
    email: string;
    password: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
}
export declare class UserUncheckedCreateInput {
    id?: number;
    username: string;
    email: string;
    password: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    deleted_at?: Date | string;
    student?: InstanceType<typeof StudentUncheckedCreateNestedOneWithoutUserInput>;
}
export declare class UserUncheckedUpdateManyInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    is_active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateWithoutStudentInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    is_active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUncheckedUpdateInput {
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    is_active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    student?: InstanceType<typeof StudentUncheckedUpdateOneWithoutUserNestedInput>;
}
export declare class UserUpdateManyMutationInput {
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    is_active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUpdateOneRequiredWithoutStudentNestedInput {
    create?: InstanceType<typeof UserCreateWithoutStudentInput>;
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutStudentInput>;
    upsert?: InstanceType<typeof UserUpsertWithoutStudentInput>;
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
    update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutStudentInput>;
}
export declare class UserUpdateToOneWithWhereWithoutStudentInput {
    where?: InstanceType<typeof UserWhereInput>;
    data: InstanceType<typeof UserUpdateWithoutStudentInput>;
}
export declare class UserUpdateWithoutStudentInput {
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    is_active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
}
export declare class UserUpdateInput {
    username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    is_active?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    created_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    updated_at?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
    deleted_at?: InstanceType<typeof NullableDateTimeFieldUpdateOperationsInput>;
    student?: InstanceType<typeof StudentUpdateOneWithoutUserNestedInput>;
}
export declare class UserUpsertWithoutStudentInput {
    update: InstanceType<typeof UserUpdateWithoutStudentInput>;
    create: InstanceType<typeof UserCreateWithoutStudentInput>;
    where?: InstanceType<typeof UserWhereInput>;
}
export declare class UserWhereUniqueInput {
    id?: number;
    username?: string;
    email?: string;
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    password?: InstanceType<typeof StringFilter>;
    is_active?: InstanceType<typeof BoolFilter>;
    created_at?: InstanceType<typeof DateTimeFilter>;
    updated_at?: InstanceType<typeof DateTimeFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableFilter>;
    student?: InstanceType<typeof StudentNullableRelationFilter>;
}
export declare class UserWhereInput {
    AND?: Array<UserWhereInput>;
    OR?: Array<UserWhereInput>;
    NOT?: Array<UserWhereInput>;
    id?: InstanceType<typeof IntFilter>;
    username?: InstanceType<typeof StringFilter>;
    email?: InstanceType<typeof StringFilter>;
    password?: InstanceType<typeof StringFilter>;
    is_active?: InstanceType<typeof BoolFilter>;
    created_at?: InstanceType<typeof DateTimeFilter>;
    updated_at?: InstanceType<typeof DateTimeFilter>;
    deleted_at?: InstanceType<typeof DateTimeNullableFilter>;
    student?: InstanceType<typeof StudentNullableRelationFilter>;
}
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null;
    student?: InstanceType<typeof Student> | null;
}
