"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CourseScalarWhereWithAggregatesInput_1, CourseScalarWhereInput_1, CourseWhereInput_1, NestedBoolFilter_1, NestedBoolNullableFilter_1, NestedBoolNullableWithAggregatesFilter_1, NestedBoolWithAggregatesFilter_1, NestedDateTimeFilter_1, NestedDateTimeNullableFilter_1, NestedDateTimeNullableWithAggregatesFilter_1, NestedDateTimeWithAggregatesFilter_1, NestedEnumGraderFilter_1, NestedEnumGraderWithAggregatesFilter_1, NestedFloatFilter_1, NestedFloatNullableFilter_1, NestedIntFilter_1, NestedIntNullableFilter_1, NestedIntNullableWithAggregatesFilter_1, NestedIntWithAggregatesFilter_1, NestedStringFilter_1, NestedStringNullableFilter_1, NestedStringNullableWithAggregatesFilter_1, NestedStringWithAggregatesFilter_1, StudentScalarWhereWithAggregatesInput_1, StudentWhereInput_1, UserScalarWhereWithAggregatesInput_1, UserWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseUpdateManyWithWhereWithoutStudentInput = exports.CourseUpdateManyMutationInput = exports.CourseUncheckedUpdateInput = exports.CourseUncheckedUpdateWithoutStudentInput = exports.CourseUncheckedUpdateManyInput = exports.CourseUncheckedUpdateManyWithoutStudentInput = exports.CourseUncheckedUpdateManyWithoutStudentNestedInput = exports.CourseUncheckedCreateInput = exports.CourseUncheckedCreateWithoutStudentInput = exports.CourseUncheckedCreateNestedManyWithoutStudentInput = exports.CourseSumOrderByAggregateInput = exports.CourseSumAggregate = exports.CourseSumAggregateInput = exports.CourseScalarWhereInput = exports.CourseScalarWhereWithAggregatesInput = exports.CourseOrderByWithRelationInput = exports.CourseOrderByWithAggregationInput = exports.CourseOrderByRelationAggregateInput = exports.CourseMinOrderByAggregateInput = exports.CourseMinAggregate = exports.CourseMinAggregateInput = exports.CourseMaxOrderByAggregateInput = exports.CourseMaxAggregate = exports.CourseMaxAggregateInput = exports.CourseListRelationFilter = exports.CourseGroupBy = exports.CourseGroupByArgs = exports.CourseCreateInput = exports.CourseCreateWithoutStudentInput = exports.CourseCreateOrConnectWithoutStudentInput = exports.CourseCreateNestedManyWithoutStudentInput = exports.CourseCreateManyInput = exports.CourseCreateManyStudentInput = exports.CourseCreateManyStudentInputEnvelope = exports.CourseCountOrderByAggregateInput = exports.CourseCountAggregate = exports.CourseCountAggregateInput = exports.CourseAvgOrderByAggregateInput = exports.CourseAvgAggregate = exports.CourseAvgAggregateInput = exports.CourseAggregateArgs = exports.AggregateCourse = exports.CourseScalarFieldEnum = exports.Grader = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.TransactionIsolationLevel = exports.StudentScalarFieldEnum = exports.UserScalarFieldEnum = void 0;
exports.NestedFloatFilter = exports.NestedEnumGraderWithAggregatesFilter = exports.NestedEnumGraderFilter = exports.NestedDateTimeWithAggregatesFilter = exports.NestedDateTimeNullableWithAggregatesFilter = exports.NestedDateTimeNullableFilter = exports.NestedDateTimeFilter = exports.NestedBoolWithAggregatesFilter = exports.NestedBoolNullableWithAggregatesFilter = exports.NestedBoolNullableFilter = exports.NestedBoolFilter = exports.IntWithAggregatesFilter = exports.IntNullableWithAggregatesFilter = exports.IntNullableFilter = exports.IntFilter = exports.IntFieldUpdateOperationsInput = exports.EnumGraderWithAggregatesFilter = exports.EnumGraderFilter = exports.EnumGraderFieldUpdateOperationsInput = exports.DateTimeWithAggregatesFilter = exports.DateTimeNullableWithAggregatesFilter = exports.DateTimeNullableFilter = exports.DateTimeFilter = exports.DateTimeFieldUpdateOperationsInput = exports.BoolWithAggregatesFilter = exports.BoolNullableWithAggregatesFilter = exports.BoolNullableFilter = exports.BoolFilter = exports.BoolFieldUpdateOperationsInput = exports.AffectedRows = exports.UpsertOneCourseArgs = exports.UpdateOneCourseArgs = exports.UpdateManyCourseArgs = exports.FindUniqueCourseArgs = exports.FindUniqueCourseOrThrowArgs = exports.FindManyCourseArgs = exports.FindFirstCourseArgs = exports.FindFirstCourseOrThrowArgs = exports.DeleteOneCourseArgs = exports.DeleteManyCourseArgs = exports.CreateOneCourseArgs = exports.CreateManyCourseArgs = exports.Course = exports.CourseWhereInput = exports.CourseWhereUniqueInput = exports.CourseUpsertWithWhereUniqueWithoutStudentInput = exports.CourseUpdateInput = exports.CourseUpdateWithoutStudentInput = exports.CourseUpdateWithWhereUniqueWithoutStudentInput = exports.CourseUpdateManyWithoutStudentNestedInput = void 0;
exports.StudentMaxOrderByAggregateInput = exports.StudentMaxAggregate = exports.StudentMaxAggregateInput = exports.StudentGroupBy = exports.StudentGroupByArgs = exports.StudentCreateInput = exports.StudentCreateWithoutUserInput = exports.StudentCreateWithoutCoursesInput = exports.StudentCreateOrConnectWithoutUserInput = exports.StudentCreateOrConnectWithoutCoursesInput = exports.StudentCreateNestedOneWithoutUserInput = exports.StudentCreateNestedOneWithoutCoursesInput = exports.StudentCreateManyInput = exports.StudentCount = exports.StudentCountOrderByAggregateInput = exports.StudentCountAggregate = exports.StudentCountAggregateInput = exports.StudentAvgOrderByAggregateInput = exports.StudentAvgAggregate = exports.StudentAvgAggregateInput = exports.StudentAggregateArgs = exports.FindUniqueStudentArgs = exports.FindUniqueStudentOrThrowArgs = exports.FindManyStudentArgs = exports.FindFirstStudentArgs = exports.FindFirstStudentOrThrowArgs = exports.DeleteOneStudentArgs = exports.DeleteManyStudentArgs = exports.CreateOneStudentArgs = exports.CreateManyStudentArgs = exports.AggregateStudent = exports.StringWithAggregatesFilter = exports.StringNullableWithAggregatesFilter = exports.StringNullableFilter = exports.StringFilter = exports.StringFieldUpdateOperationsInput = exports.SortOrderInput = exports.NullableStringFieldUpdateOperationsInput = exports.NullableIntFieldUpdateOperationsInput = exports.NullableDateTimeFieldUpdateOperationsInput = exports.NullableBoolFieldUpdateOperationsInput = exports.NestedStringWithAggregatesFilter = exports.NestedStringNullableWithAggregatesFilter = exports.NestedStringNullableFilter = exports.NestedStringFilter = exports.NestedIntWithAggregatesFilter = exports.NestedIntNullableWithAggregatesFilter = exports.NestedIntNullableFilter = exports.NestedIntFilter = exports.NestedFloatNullableFilter = void 0;
exports.UserAvgAggregateInput = exports.UserAggregateArgs = exports.UpsertOneUserArgs = exports.UpdateOneUserArgs = exports.UpdateManyUserArgs = exports.FindUniqueUserArgs = exports.FindUniqueUserOrThrowArgs = exports.FindManyUserArgs = exports.FindFirstUserArgs = exports.FindFirstUserOrThrowArgs = exports.DeleteOneUserArgs = exports.DeleteManyUserArgs = exports.CreateOneUserArgs = exports.CreateManyUserArgs = exports.AggregateUser = exports.UpsertOneStudentArgs = exports.UpdateOneStudentArgs = exports.UpdateManyStudentArgs = exports.Student = exports.StudentWhereInput = exports.StudentWhereUniqueInput = exports.StudentUpsertWithoutUserInput = exports.StudentUpsertWithoutCoursesInput = exports.StudentUpdateInput = exports.StudentUpdateWithoutUserInput = exports.StudentUpdateWithoutCoursesInput = exports.StudentUpdateToOneWithWhereWithoutUserInput = exports.StudentUpdateToOneWithWhereWithoutCoursesInput = exports.StudentUpdateOneWithoutUserNestedInput = exports.StudentUpdateOneWithoutCoursesNestedInput = exports.StudentUpdateManyMutationInput = exports.StudentUncheckedUpdateInput = exports.StudentUncheckedUpdateWithoutUserInput = exports.StudentUncheckedUpdateWithoutCoursesInput = exports.StudentUncheckedUpdateOneWithoutUserNestedInput = exports.StudentUncheckedUpdateManyInput = exports.StudentUncheckedCreateInput = exports.StudentUncheckedCreateWithoutUserInput = exports.StudentUncheckedCreateWithoutCoursesInput = exports.StudentUncheckedCreateNestedOneWithoutUserInput = exports.StudentSumOrderByAggregateInput = exports.StudentSumAggregate = exports.StudentSumAggregateInput = exports.StudentScalarWhereWithAggregatesInput = exports.StudentOrderByWithRelationInput = exports.StudentOrderByWithAggregationInput = exports.StudentNullableRelationFilter = exports.StudentMinOrderByAggregateInput = exports.StudentMinAggregate = exports.StudentMinAggregateInput = void 0;
exports.User = exports.UserWhereInput = exports.UserWhereUniqueInput = exports.UserUpsertWithoutStudentInput = exports.UserUpdateInput = exports.UserUpdateWithoutStudentInput = exports.UserUpdateToOneWithWhereWithoutStudentInput = exports.UserUpdateOneRequiredWithoutStudentNestedInput = exports.UserUpdateManyMutationInput = exports.UserUncheckedUpdateInput = exports.UserUncheckedUpdateWithoutStudentInput = exports.UserUncheckedUpdateManyInput = exports.UserUncheckedCreateInput = exports.UserUncheckedCreateWithoutStudentInput = exports.UserSumOrderByAggregateInput = exports.UserSumAggregate = exports.UserSumAggregateInput = exports.UserScalarWhereWithAggregatesInput = exports.UserRelationFilter = exports.UserOrderByWithRelationInput = exports.UserOrderByWithAggregationInput = exports.UserMinOrderByAggregateInput = exports.UserMinAggregate = exports.UserMinAggregateInput = exports.UserMaxOrderByAggregateInput = exports.UserMaxAggregate = exports.UserMaxAggregateInput = exports.UserGroupBy = exports.UserGroupByArgs = exports.UserCreateInput = exports.UserCreateWithoutStudentInput = exports.UserCreateOrConnectWithoutStudentInput = exports.UserCreateNestedOneWithoutStudentInput = exports.UserCreateManyInput = exports.UserCountOrderByAggregateInput = exports.UserCountAggregate = exports.UserCountAggregateInput = exports.UserAvgOrderByAggregateInput = exports.UserAvgAggregate = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const class_transformer_1 = require("class-transformer");
const graphql_4 = require("@nestjs/graphql");
const graphql_5 = require("@nestjs/graphql");
const graphql_6 = require("@nestjs/graphql");
const graphql_7 = require("@nestjs/graphql");
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["username"] = "username";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["is_active"] = "is_active";
    UserScalarFieldEnum["created_at"] = "created_at";
    UserScalarFieldEnum["updated_at"] = "updated_at";
    UserScalarFieldEnum["deleted_at"] = "deleted_at";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
var StudentScalarFieldEnum;
(function (StudentScalarFieldEnum) {
    StudentScalarFieldEnum["id"] = "id";
    StudentScalarFieldEnum["fullname"] = "fullname";
    StudentScalarFieldEnum["phone"] = "phone";
    StudentScalarFieldEnum["grade"] = "grade";
    StudentScalarFieldEnum["profile_pict"] = "profile_pict";
    StudentScalarFieldEnum["is_graduate"] = "is_graduate";
    StudentScalarFieldEnum["userId"] = "userId";
    StudentScalarFieldEnum["created_at"] = "created_at";
    StudentScalarFieldEnum["updated_at"] = "updated_at";
    StudentScalarFieldEnum["deleted_at"] = "deleted_at";
})(StudentScalarFieldEnum = exports.StudentScalarFieldEnum || (exports.StudentScalarFieldEnum = {}));
var TransactionIsolationLevel;
(function (TransactionIsolationLevel) {
    TransactionIsolationLevel["ReadUncommitted"] = "ReadUncommitted";
    TransactionIsolationLevel["ReadCommitted"] = "ReadCommitted";
    TransactionIsolationLevel["RepeatableRead"] = "RepeatableRead";
    TransactionIsolationLevel["Serializable"] = "Serializable";
})(TransactionIsolationLevel = exports.TransactionIsolationLevel || (exports.TransactionIsolationLevel = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["asc"] = "asc";
    SortOrder["desc"] = "desc";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var QueryMode;
(function (QueryMode) {
    QueryMode["default"] = "default";
    QueryMode["insensitive"] = "insensitive";
})(QueryMode = exports.QueryMode || (exports.QueryMode = {}));
var NullsOrder;
(function (NullsOrder) {
    NullsOrder["first"] = "first";
    NullsOrder["last"] = "last";
})(NullsOrder = exports.NullsOrder || (exports.NullsOrder = {}));
var Grader;
(function (Grader) {
    Grader["X"] = "X";
    Grader["XI"] = "XI";
    Grader["XII"] = "XII";
})(Grader = exports.Grader || (exports.Grader = {}));
var CourseScalarFieldEnum;
(function (CourseScalarFieldEnum) {
    CourseScalarFieldEnum["id"] = "id";
    CourseScalarFieldEnum["course_name"] = "course_name";
    CourseScalarFieldEnum["added_at"] = "added_at";
    CourseScalarFieldEnum["studentId"] = "studentId";
    CourseScalarFieldEnum["created_at"] = "created_at";
    CourseScalarFieldEnum["updated_at"] = "updated_at";
    CourseScalarFieldEnum["deleted_at"] = "deleted_at";
})(CourseScalarFieldEnum = exports.CourseScalarFieldEnum || (exports.CourseScalarFieldEnum = {}));
(0, graphql_7.registerEnumType)(CourseScalarFieldEnum, { name: 'CourseScalarFieldEnum', description: undefined });
(0, graphql_7.registerEnumType)(Grader, { name: 'Grader', description: undefined });
(0, graphql_7.registerEnumType)(NullsOrder, { name: 'NullsOrder', description: undefined });
(0, graphql_7.registerEnumType)(QueryMode, { name: 'QueryMode', description: undefined });
(0, graphql_7.registerEnumType)(SortOrder, { name: 'SortOrder', description: undefined });
(0, graphql_7.registerEnumType)(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined });
(0, graphql_7.registerEnumType)(StudentScalarFieldEnum, { name: 'StudentScalarFieldEnum', description: undefined });
(0, graphql_7.registerEnumType)(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
let AggregateCourse = class AggregateCourse {
};
__decorate([
    (0, graphql_1.Field)(() => CourseCountAggregate, { nullable: true })
], AggregateCourse.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseAvgAggregate, { nullable: true })
], AggregateCourse.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseSumAggregate, { nullable: true })
], AggregateCourse.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMinAggregate, { nullable: true })
], AggregateCourse.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMaxAggregate, { nullable: true })
], AggregateCourse.prototype, "_max", void 0);
AggregateCourse = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateCourse);
exports.AggregateCourse = AggregateCourse;
let CourseAggregateArgs = class CourseAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereInput)
], CourseAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseOrderByWithRelationInput], { nullable: true })
], CourseAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: true })
], CourseAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCountAggregateInput, { nullable: true })
], CourseAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseAvgAggregateInput, { nullable: true })
], CourseAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseSumAggregateInput, { nullable: true })
], CourseAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMinAggregateInput, { nullable: true })
], CourseAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMaxAggregateInput, { nullable: true })
], CourseAggregateArgs.prototype, "_max", void 0);
CourseAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CourseAggregateArgs);
exports.CourseAggregateArgs = CourseAggregateArgs;
let CourseAvgAggregateInput = class CourseAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseAvgAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseAvgAggregateInput.prototype, "studentId", void 0);
CourseAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseAvgAggregateInput);
exports.CourseAvgAggregateInput = CourseAvgAggregateInput;
let CourseAvgAggregate = class CourseAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], CourseAvgAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], CourseAvgAggregate.prototype, "studentId", void 0);
CourseAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], CourseAvgAggregate);
exports.CourseAvgAggregate = CourseAvgAggregate;
let CourseAvgOrderByAggregateInput = class CourseAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseAvgOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseAvgOrderByAggregateInput.prototype, "studentId", void 0);
CourseAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseAvgOrderByAggregateInput);
exports.CourseAvgOrderByAggregateInput = CourseAvgOrderByAggregateInput;
let CourseCountAggregateInput = class CourseCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCountAggregateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCountAggregateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCountAggregateInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCountAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCountAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCountAggregateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCountAggregateInput.prototype, "_all", void 0);
CourseCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseCountAggregateInput);
exports.CourseCountAggregateInput = CourseCountAggregateInput;
let CourseCountAggregate = class CourseCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseCountAggregate.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseCountAggregate.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseCountAggregate.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseCountAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseCountAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseCountAggregate.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseCountAggregate.prototype, "_all", void 0);
CourseCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], CourseCountAggregate);
exports.CourseCountAggregate = CourseCountAggregate;
let CourseCountOrderByAggregateInput = class CourseCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseCountOrderByAggregateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseCountOrderByAggregateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseCountOrderByAggregateInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseCountOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseCountOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseCountOrderByAggregateInput.prototype, "deleted_at", void 0);
CourseCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseCountOrderByAggregateInput);
exports.CourseCountOrderByAggregateInput = CourseCountOrderByAggregateInput;
let CourseCreateManyStudentInputEnvelope = class CourseCreateManyStudentInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateManyStudentInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseCreateManyStudentInput)
], CourseCreateManyStudentInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseCreateManyStudentInputEnvelope.prototype, "skipDuplicates", void 0);
CourseCreateManyStudentInputEnvelope = __decorate([
    (0, graphql_5.InputType)()
], CourseCreateManyStudentInputEnvelope);
exports.CourseCreateManyStudentInputEnvelope = CourseCreateManyStudentInputEnvelope;
let CourseCreateManyStudentInput = class CourseCreateManyStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseCreateManyStudentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CourseCreateManyStudentInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateManyStudentInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateManyStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateManyStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateManyStudentInput.prototype, "deleted_at", void 0);
CourseCreateManyStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseCreateManyStudentInput);
exports.CourseCreateManyStudentInput = CourseCreateManyStudentInput;
let CourseCreateManyInput = class CourseCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CourseCreateManyInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateManyInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseCreateManyInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateManyInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateManyInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateManyInput.prototype, "deleted_at", void 0);
CourseCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], CourseCreateManyInput);
exports.CourseCreateManyInput = CourseCreateManyInput;
let CourseCreateNestedManyWithoutStudentInput = class CourseCreateNestedManyWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateWithoutStudentInput)
], CourseCreateNestedManyWithoutStudentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateOrConnectWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateOrConnectWithoutStudentInput)
], CourseCreateNestedManyWithoutStudentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateManyStudentInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateManyStudentInputEnvelope)
], CourseCreateNestedManyWithoutStudentInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseCreateNestedManyWithoutStudentInput.prototype, "connect", void 0);
CourseCreateNestedManyWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseCreateNestedManyWithoutStudentInput);
exports.CourseCreateNestedManyWithoutStudentInput = CourseCreateNestedManyWithoutStudentInput;
let CourseCreateOrConnectWithoutStudentInput = class CourseCreateOrConnectWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseCreateOrConnectWithoutStudentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateWithoutStudentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseCreateWithoutStudentInput)
], CourseCreateOrConnectWithoutStudentInput.prototype, "create", void 0);
CourseCreateOrConnectWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseCreateOrConnectWithoutStudentInput);
exports.CourseCreateOrConnectWithoutStudentInput = CourseCreateOrConnectWithoutStudentInput;
let CourseCreateWithoutStudentInput = class CourseCreateWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CourseCreateWithoutStudentInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateWithoutStudentInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateWithoutStudentInput.prototype, "deleted_at", void 0);
CourseCreateWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseCreateWithoutStudentInput);
exports.CourseCreateWithoutStudentInput = CourseCreateWithoutStudentInput;
let CourseCreateInput = class CourseCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CourseCreateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseCreateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateNestedOneWithoutCoursesInput, { nullable: true })
], CourseCreateInput.prototype, "Student", void 0);
CourseCreateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseCreateInput);
exports.CourseCreateInput = CourseCreateInput;
let CourseGroupByArgs = class CourseGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereInput)
], CourseGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseOrderByWithAggregationInput], { nullable: true })
], CourseGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarFieldEnum], { nullable: false })
], CourseGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseScalarWhereWithAggregatesInput, { nullable: true })
], CourseGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCountAggregateInput, { nullable: true })
], CourseGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseAvgAggregateInput, { nullable: true })
], CourseGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseSumAggregateInput, { nullable: true })
], CourseGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMinAggregateInput, { nullable: true })
], CourseGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMaxAggregateInput, { nullable: true })
], CourseGroupByArgs.prototype, "_max", void 0);
CourseGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CourseGroupByArgs);
exports.CourseGroupByArgs = CourseGroupByArgs;
let CourseGroupBy = class CourseGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], CourseGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CourseGroupBy.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CourseGroupBy.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseGroupBy.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CourseGroupBy.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], CourseGroupBy.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseGroupBy.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCountAggregate, { nullable: true })
], CourseGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseAvgAggregate, { nullable: true })
], CourseGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseSumAggregate, { nullable: true })
], CourseGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMinAggregate, { nullable: true })
], CourseGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMaxAggregate, { nullable: true })
], CourseGroupBy.prototype, "_max", void 0);
CourseGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], CourseGroupBy);
exports.CourseGroupBy = CourseGroupBy;
let CourseListRelationFilter = class CourseListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true })
], CourseListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true })
], CourseListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true })
], CourseListRelationFilter.prototype, "none", void 0);
CourseListRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], CourseListRelationFilter);
exports.CourseListRelationFilter = CourseListRelationFilter;
let CourseMaxAggregateInput = class CourseMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMaxAggregateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMaxAggregateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMaxAggregateInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMaxAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMaxAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMaxAggregateInput.prototype, "deleted_at", void 0);
CourseMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseMaxAggregateInput);
exports.CourseMaxAggregateInput = CourseMaxAggregateInput;
let CourseMaxAggregate = class CourseMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CourseMaxAggregate.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseMaxAggregate.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseMaxAggregate.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseMaxAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseMaxAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseMaxAggregate.prototype, "deleted_at", void 0);
CourseMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], CourseMaxAggregate);
exports.CourseMaxAggregate = CourseMaxAggregate;
let CourseMaxOrderByAggregateInput = class CourseMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMaxOrderByAggregateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMaxOrderByAggregateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMaxOrderByAggregateInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMaxOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMaxOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMaxOrderByAggregateInput.prototype, "deleted_at", void 0);
CourseMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseMaxOrderByAggregateInput);
exports.CourseMaxOrderByAggregateInput = CourseMaxOrderByAggregateInput;
let CourseMinAggregateInput = class CourseMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMinAggregateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMinAggregateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMinAggregateInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMinAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMinAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseMinAggregateInput.prototype, "deleted_at", void 0);
CourseMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseMinAggregateInput);
exports.CourseMinAggregateInput = CourseMinAggregateInput;
let CourseMinAggregate = class CourseMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], CourseMinAggregate.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseMinAggregate.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseMinAggregate.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseMinAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseMinAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseMinAggregate.prototype, "deleted_at", void 0);
CourseMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], CourseMinAggregate);
exports.CourseMinAggregate = CourseMinAggregate;
let CourseMinOrderByAggregateInput = class CourseMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMinOrderByAggregateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMinOrderByAggregateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMinOrderByAggregateInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMinOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMinOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseMinOrderByAggregateInput.prototype, "deleted_at", void 0);
CourseMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseMinOrderByAggregateInput);
exports.CourseMinOrderByAggregateInput = CourseMinOrderByAggregateInput;
let CourseOrderByRelationAggregateInput = class CourseOrderByRelationAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByRelationAggregateInput.prototype, "_count", void 0);
CourseOrderByRelationAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseOrderByRelationAggregateInput);
exports.CourseOrderByRelationAggregateInput = CourseOrderByRelationAggregateInput;
let CourseOrderByWithAggregationInput = class CourseOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCountOrderByAggregateInput, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseAvgOrderByAggregateInput, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMaxOrderByAggregateInput, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseMinOrderByAggregateInput, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseSumOrderByAggregateInput, { nullable: true })
], CourseOrderByWithAggregationInput.prototype, "_sum", void 0);
CourseOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], CourseOrderByWithAggregationInput);
exports.CourseOrderByWithAggregationInput = CourseOrderByWithAggregationInput;
let CourseOrderByWithRelationInput = class CourseOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithRelationInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithRelationInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], CourseOrderByWithRelationInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithRelationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseOrderByWithRelationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], CourseOrderByWithRelationInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentOrderByWithRelationInput, { nullable: true })
], CourseOrderByWithRelationInput.prototype, "Student", void 0);
CourseOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], CourseOrderByWithRelationInput);
exports.CourseOrderByWithRelationInput = CourseOrderByWithRelationInput;
let CourseScalarWhereWithAggregatesInput = CourseScalarWhereWithAggregatesInput_1 = class CourseScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarWhereWithAggregatesInput_1], { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarWhereWithAggregatesInput_1], { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarWhereWithAggregatesInput_1], { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableWithAggregatesFilter, { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], CourseScalarWhereWithAggregatesInput.prototype, "deleted_at", void 0);
CourseScalarWhereWithAggregatesInput = CourseScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], CourseScalarWhereWithAggregatesInput);
exports.CourseScalarWhereWithAggregatesInput = CourseScalarWhereWithAggregatesInput;
let CourseScalarWhereInput = CourseScalarWhereInput_1 = class CourseScalarWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarWhereInput_1], { nullable: true })
], CourseScalarWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarWhereInput_1], { nullable: true })
], CourseScalarWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarWhereInput_1], { nullable: true })
], CourseScalarWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], CourseScalarWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CourseScalarWhereInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseScalarWhereInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], CourseScalarWhereInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseScalarWhereInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseScalarWhereInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], CourseScalarWhereInput.prototype, "deleted_at", void 0);
CourseScalarWhereInput = CourseScalarWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], CourseScalarWhereInput);
exports.CourseScalarWhereInput = CourseScalarWhereInput;
let CourseSumAggregateInput = class CourseSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseSumAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CourseSumAggregateInput.prototype, "studentId", void 0);
CourseSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseSumAggregateInput);
exports.CourseSumAggregateInput = CourseSumAggregateInput;
let CourseSumAggregate = class CourseSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseSumAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseSumAggregate.prototype, "studentId", void 0);
CourseSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], CourseSumAggregate);
exports.CourseSumAggregate = CourseSumAggregate;
let CourseSumOrderByAggregateInput = class CourseSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseSumOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], CourseSumOrderByAggregateInput.prototype, "studentId", void 0);
CourseSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseSumOrderByAggregateInput);
exports.CourseSumOrderByAggregateInput = CourseSumOrderByAggregateInput;
let CourseUncheckedCreateNestedManyWithoutStudentInput = class CourseUncheckedCreateNestedManyWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateWithoutStudentInput)
], CourseUncheckedCreateNestedManyWithoutStudentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateOrConnectWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateOrConnectWithoutStudentInput)
], CourseUncheckedCreateNestedManyWithoutStudentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateManyStudentInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateManyStudentInputEnvelope)
], CourseUncheckedCreateNestedManyWithoutStudentInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUncheckedCreateNestedManyWithoutStudentInput.prototype, "connect", void 0);
CourseUncheckedCreateNestedManyWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUncheckedCreateNestedManyWithoutStudentInput);
exports.CourseUncheckedCreateNestedManyWithoutStudentInput = CourseUncheckedCreateNestedManyWithoutStudentInput;
let CourseUncheckedCreateWithoutStudentInput = class CourseUncheckedCreateWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseUncheckedCreateWithoutStudentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CourseUncheckedCreateWithoutStudentInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseUncheckedCreateWithoutStudentInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseUncheckedCreateWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseUncheckedCreateWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseUncheckedCreateWithoutStudentInput.prototype, "deleted_at", void 0);
CourseUncheckedCreateWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUncheckedCreateWithoutStudentInput);
exports.CourseUncheckedCreateWithoutStudentInput = CourseUncheckedCreateWithoutStudentInput;
let CourseUncheckedCreateInput = class CourseUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], CourseUncheckedCreateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseUncheckedCreateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseUncheckedCreateInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseUncheckedCreateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseUncheckedCreateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], CourseUncheckedCreateInput.prototype, "deleted_at", void 0);
CourseUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUncheckedCreateInput);
exports.CourseUncheckedCreateInput = CourseUncheckedCreateInput;
let CourseUncheckedUpdateManyWithoutStudentNestedInput = class CourseUncheckedUpdateManyWithoutStudentNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateWithoutStudentInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateOrConnectWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateOrConnectWithoutStudentInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseUpsertWithWhereUniqueWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseUpsertWithWhereUniqueWithoutStudentInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateManyStudentInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateManyStudentInputEnvelope)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseUpdateWithWhereUniqueWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseUpdateWithWhereUniqueWithoutStudentInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseUpdateManyWithWhereWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseUpdateManyWithWhereWithoutStudentInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseScalarWhereInput)
], CourseUncheckedUpdateManyWithoutStudentNestedInput.prototype, "deleteMany", void 0);
CourseUncheckedUpdateManyWithoutStudentNestedInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUncheckedUpdateManyWithoutStudentNestedInput);
exports.CourseUncheckedUpdateManyWithoutStudentNestedInput = CourseUncheckedUpdateManyWithoutStudentNestedInput;
let CourseUncheckedUpdateManyWithoutStudentInput = class CourseUncheckedUpdateManyWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyWithoutStudentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyWithoutStudentInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyWithoutStudentInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyWithoutStudentInput.prototype, "deleted_at", void 0);
CourseUncheckedUpdateManyWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUncheckedUpdateManyWithoutStudentInput);
exports.CourseUncheckedUpdateManyWithoutStudentInput = CourseUncheckedUpdateManyWithoutStudentInput;
let CourseUncheckedUpdateManyInput = class CourseUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateManyInput.prototype, "deleted_at", void 0);
CourseUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUncheckedUpdateManyInput);
exports.CourseUncheckedUpdateManyInput = CourseUncheckedUpdateManyInput;
let CourseUncheckedUpdateWithoutStudentInput = class CourseUncheckedUpdateWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateWithoutStudentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateWithoutStudentInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateWithoutStudentInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateWithoutStudentInput.prototype, "deleted_at", void 0);
CourseUncheckedUpdateWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUncheckedUpdateWithoutStudentInput);
exports.CourseUncheckedUpdateWithoutStudentInput = CourseUncheckedUpdateWithoutStudentInput;
let CourseUncheckedUpdateInput = class CourseUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUncheckedUpdateInput.prototype, "deleted_at", void 0);
CourseUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUncheckedUpdateInput);
exports.CourseUncheckedUpdateInput = CourseUncheckedUpdateInput;
let CourseUpdateManyMutationInput = class CourseUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateManyMutationInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateManyMutationInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateManyMutationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateManyMutationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateManyMutationInput.prototype, "deleted_at", void 0);
CourseUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUpdateManyMutationInput);
exports.CourseUpdateManyMutationInput = CourseUpdateManyMutationInput;
let CourseUpdateManyWithWhereWithoutStudentInput = class CourseUpdateManyWithWhereWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => CourseScalarWhereInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseScalarWhereInput)
], CourseUpdateManyWithWhereWithoutStudentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseUpdateManyMutationInput)
], CourseUpdateManyWithWhereWithoutStudentInput.prototype, "data", void 0);
CourseUpdateManyWithWhereWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUpdateManyWithWhereWithoutStudentInput);
exports.CourseUpdateManyWithWhereWithoutStudentInput = CourseUpdateManyWithWhereWithoutStudentInput;
let CourseUpdateManyWithoutStudentNestedInput = class CourseUpdateManyWithoutStudentNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateWithoutStudentInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateOrConnectWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateOrConnectWithoutStudentInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseUpsertWithWhereUniqueWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseUpsertWithWhereUniqueWithoutStudentInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateManyStudentInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseCreateManyStudentInputEnvelope)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseUpdateWithWhereUniqueWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseUpdateWithWhereUniqueWithoutStudentInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseUpdateManyWithWhereWithoutStudentInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseUpdateManyWithWhereWithoutStudentInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseScalarWhereInput)
], CourseUpdateManyWithoutStudentNestedInput.prototype, "deleteMany", void 0);
CourseUpdateManyWithoutStudentNestedInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUpdateManyWithoutStudentNestedInput);
exports.CourseUpdateManyWithoutStudentNestedInput = CourseUpdateManyWithoutStudentNestedInput;
let CourseUpdateWithWhereUniqueWithoutStudentInput = class CourseUpdateWithWhereUniqueWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUpdateWithWhereUniqueWithoutStudentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUpdateWithoutStudentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseUpdateWithoutStudentInput)
], CourseUpdateWithWhereUniqueWithoutStudentInput.prototype, "data", void 0);
CourseUpdateWithWhereUniqueWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUpdateWithWhereUniqueWithoutStudentInput);
exports.CourseUpdateWithWhereUniqueWithoutStudentInput = CourseUpdateWithWhereUniqueWithoutStudentInput;
let CourseUpdateWithoutStudentInput = class CourseUpdateWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateWithoutStudentInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateWithoutStudentInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateWithoutStudentInput.prototype, "deleted_at", void 0);
CourseUpdateWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUpdateWithoutStudentInput);
exports.CourseUpdateWithoutStudentInput = CourseUpdateWithoutStudentInput;
let CourseUpdateInput = class CourseUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], CourseUpdateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateOneWithoutCoursesNestedInput, { nullable: true })
], CourseUpdateInput.prototype, "Student", void 0);
CourseUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUpdateInput);
exports.CourseUpdateInput = CourseUpdateInput;
let CourseUpsertWithWhereUniqueWithoutStudentInput = class CourseUpsertWithWhereUniqueWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], CourseUpsertWithWhereUniqueWithoutStudentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUpdateWithoutStudentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseUpdateWithoutStudentInput)
], CourseUpsertWithWhereUniqueWithoutStudentInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateWithoutStudentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseCreateWithoutStudentInput)
], CourseUpsertWithWhereUniqueWithoutStudentInput.prototype, "create", void 0);
CourseUpsertWithWhereUniqueWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], CourseUpsertWithWhereUniqueWithoutStudentInput);
exports.CourseUpsertWithWhereUniqueWithoutStudentInput = CourseUpsertWithWhereUniqueWithoutStudentInput;
let CourseWhereUniqueInput = class CourseWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], CourseWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput], { nullable: true })
], CourseWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput], { nullable: true })
], CourseWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput], { nullable: true })
], CourseWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CourseWhereUniqueInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseWhereUniqueInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], CourseWhereUniqueInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseWhereUniqueInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseWhereUniqueInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], CourseWhereUniqueInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentNullableRelationFilter, { nullable: true })
], CourseWhereUniqueInput.prototype, "Student", void 0);
CourseWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], CourseWhereUniqueInput);
exports.CourseWhereUniqueInput = CourseWhereUniqueInput;
let CourseWhereInput = CourseWhereInput_1 = class CourseWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true })
], CourseWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true })
], CourseWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseWhereInput_1], { nullable: true })
], CourseWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], CourseWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], CourseWhereInput.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseWhereInput.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntNullableFilter, { nullable: true })
], CourseWhereInput.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseWhereInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], CourseWhereInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], CourseWhereInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentNullableRelationFilter, { nullable: true })
], CourseWhereInput.prototype, "Student", void 0);
CourseWhereInput = CourseWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], CourseWhereInput);
exports.CourseWhereInput = CourseWhereInput;
let Course = class Course {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Course.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Course.prototype, "course_name", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Course.prototype, "added_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], Course.prototype, "studentId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Course.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Course.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], Course.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Student, { nullable: true })
], Course.prototype, "Student", void 0);
Course = __decorate([
    (0, graphql_2.ObjectType)()
], Course);
exports.Course = Course;
let CreateManyCourseArgs = class CreateManyCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [CourseCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseCreateManyInput)
], CreateManyCourseArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyCourseArgs.prototype, "skipDuplicates", void 0);
CreateManyCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyCourseArgs);
exports.CreateManyCourseArgs = CreateManyCourseArgs;
let CreateOneCourseArgs = class CreateOneCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseCreateInput)
], CreateOneCourseArgs.prototype, "data", void 0);
CreateOneCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneCourseArgs);
exports.CreateOneCourseArgs = CreateOneCourseArgs;
let DeleteManyCourseArgs = class DeleteManyCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereInput)
], DeleteManyCourseArgs.prototype, "where", void 0);
DeleteManyCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyCourseArgs);
exports.DeleteManyCourseArgs = DeleteManyCourseArgs;
let DeleteOneCourseArgs = class DeleteOneCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], DeleteOneCourseArgs.prototype, "where", void 0);
DeleteOneCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneCourseArgs);
exports.DeleteOneCourseArgs = DeleteOneCourseArgs;
let FindFirstCourseOrThrowArgs = class FindFirstCourseOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereInput)
], FindFirstCourseOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseOrderByWithRelationInput], { nullable: true })
], FindFirstCourseOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: true })
], FindFirstCourseOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstCourseOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstCourseOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarFieldEnum], { nullable: true })
], FindFirstCourseOrThrowArgs.prototype, "distinct", void 0);
FindFirstCourseOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstCourseOrThrowArgs);
exports.FindFirstCourseOrThrowArgs = FindFirstCourseOrThrowArgs;
let FindFirstCourseArgs = class FindFirstCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereInput)
], FindFirstCourseArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseOrderByWithRelationInput], { nullable: true })
], FindFirstCourseArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: true })
], FindFirstCourseArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstCourseArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstCourseArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarFieldEnum], { nullable: true })
], FindFirstCourseArgs.prototype, "distinct", void 0);
FindFirstCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstCourseArgs);
exports.FindFirstCourseArgs = FindFirstCourseArgs;
let FindManyCourseArgs = class FindManyCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereInput)
], FindManyCourseArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseOrderByWithRelationInput], { nullable: true })
], FindManyCourseArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: true })
], FindManyCourseArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyCourseArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyCourseArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CourseScalarFieldEnum], { nullable: true })
], FindManyCourseArgs.prototype, "distinct", void 0);
FindManyCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyCourseArgs);
exports.FindManyCourseArgs = FindManyCourseArgs;
let FindUniqueCourseOrThrowArgs = class FindUniqueCourseOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], FindUniqueCourseOrThrowArgs.prototype, "where", void 0);
FindUniqueCourseOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueCourseOrThrowArgs);
exports.FindUniqueCourseOrThrowArgs = FindUniqueCourseOrThrowArgs;
let FindUniqueCourseArgs = class FindUniqueCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], FindUniqueCourseArgs.prototype, "where", void 0);
FindUniqueCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueCourseArgs);
exports.FindUniqueCourseArgs = FindUniqueCourseArgs;
let UpdateManyCourseArgs = class UpdateManyCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseUpdateManyMutationInput)
], UpdateManyCourseArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => CourseWhereInput)
], UpdateManyCourseArgs.prototype, "where", void 0);
UpdateManyCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyCourseArgs);
exports.UpdateManyCourseArgs = UpdateManyCourseArgs;
let UpdateOneCourseArgs = class UpdateOneCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseUpdateInput)
], UpdateOneCourseArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], UpdateOneCourseArgs.prototype, "where", void 0);
UpdateOneCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneCourseArgs);
exports.UpdateOneCourseArgs = UpdateOneCourseArgs;
let UpsertOneCourseArgs = class UpsertOneCourseArgs {
};
__decorate([
    (0, graphql_1.Field)(() => CourseWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseWhereUniqueInput)
], UpsertOneCourseArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseCreateInput)
], UpsertOneCourseArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => CourseUpdateInput)
], UpsertOneCourseArgs.prototype, "update", void 0);
UpsertOneCourseArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneCourseArgs);
exports.UpsertOneCourseArgs = UpsertOneCourseArgs;
let AffectedRows = class AffectedRows {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], AffectedRows.prototype, "count", void 0);
AffectedRows = __decorate([
    (0, graphql_2.ObjectType)()
], AffectedRows);
exports.AffectedRows = AffectedRows;
let BoolFieldUpdateOperationsInput = class BoolFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BoolFieldUpdateOperationsInput.prototype, "set", void 0);
BoolFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], BoolFieldUpdateOperationsInput);
exports.BoolFieldUpdateOperationsInput = BoolFieldUpdateOperationsInput;
let BoolFilter = class BoolFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BoolFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolFilter, { nullable: true })
], BoolFilter.prototype, "not", void 0);
BoolFilter = __decorate([
    (0, graphql_5.InputType)()
], BoolFilter);
exports.BoolFilter = BoolFilter;
let BoolNullableFilter = class BoolNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BoolNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableFilter, { nullable: true })
], BoolNullableFilter.prototype, "not", void 0);
BoolNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], BoolNullableFilter);
exports.BoolNullableFilter = BoolNullableFilter;
let BoolNullableWithAggregatesFilter = class BoolNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableWithAggregatesFilter, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableFilter, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableFilter, { nullable: true })
], BoolNullableWithAggregatesFilter.prototype, "_max", void 0);
BoolNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], BoolNullableWithAggregatesFilter);
exports.BoolNullableWithAggregatesFilter = BoolNullableWithAggregatesFilter;
let BoolWithAggregatesFilter = class BoolWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], BoolWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolWithAggregatesFilter, { nullable: true })
], BoolWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], BoolWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolFilter, { nullable: true })
], BoolWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolFilter, { nullable: true })
], BoolWithAggregatesFilter.prototype, "_max", void 0);
BoolWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], BoolWithAggregatesFilter);
exports.BoolWithAggregatesFilter = BoolWithAggregatesFilter;
let DateTimeFieldUpdateOperationsInput = class DateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
DateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], DateTimeFieldUpdateOperationsInput);
exports.DateTimeFieldUpdateOperationsInput = DateTimeFieldUpdateOperationsInput;
let DateTimeFilter = class DateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeFilter.prototype, "not", void 0);
DateTimeFilter = __decorate([
    (0, graphql_5.InputType)()
], DateTimeFilter);
exports.DateTimeFilter = DateTimeFilter;
let DateTimeNullableFilter = class DateTimeNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], DateTimeNullableFilter.prototype, "not", void 0);
DateTimeNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], DateTimeNullableFilter);
exports.DateTimeNullableFilter = DateTimeNullableFilter;
let DateTimeNullableWithAggregatesFilter = class DateTimeNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], DateTimeNullableWithAggregatesFilter.prototype, "_max", void 0);
DateTimeNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], DateTimeNullableWithAggregatesFilter);
exports.DateTimeNullableWithAggregatesFilter = DateTimeNullableWithAggregatesFilter;
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
DateTimeWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], DateTimeWithAggregatesFilter);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
let EnumGraderFieldUpdateOperationsInput = class EnumGraderFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: true })
], EnumGraderFieldUpdateOperationsInput.prototype, "set", void 0);
EnumGraderFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], EnumGraderFieldUpdateOperationsInput);
exports.EnumGraderFieldUpdateOperationsInput = EnumGraderFieldUpdateOperationsInput;
let EnumGraderFilter = class EnumGraderFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: true })
], EnumGraderFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Grader], { nullable: true })
], EnumGraderFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Grader], { nullable: true })
], EnumGraderFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGraderFilter, { nullable: true })
], EnumGraderFilter.prototype, "not", void 0);
EnumGraderFilter = __decorate([
    (0, graphql_5.InputType)()
], EnumGraderFilter);
exports.EnumGraderFilter = EnumGraderFilter;
let EnumGraderWithAggregatesFilter = class EnumGraderWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: true })
], EnumGraderWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Grader], { nullable: true })
], EnumGraderWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Grader], { nullable: true })
], EnumGraderWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGraderWithAggregatesFilter, { nullable: true })
], EnumGraderWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], EnumGraderWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGraderFilter, { nullable: true })
], EnumGraderWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGraderFilter, { nullable: true })
], EnumGraderWithAggregatesFilter.prototype, "_max", void 0);
EnumGraderWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], EnumGraderWithAggregatesFilter);
exports.EnumGraderWithAggregatesFilter = EnumGraderWithAggregatesFilter;
let IntFieldUpdateOperationsInput = class IntFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFieldUpdateOperationsInput.prototype, "divide", void 0);
IntFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], IntFieldUpdateOperationsInput);
exports.IntFieldUpdateOperationsInput = IntFieldUpdateOperationsInput;
let IntFilter = class IntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntFilter.prototype, "not", void 0);
IntFilter = __decorate([
    (0, graphql_5.InputType)()
], IntFilter);
exports.IntFilter = IntFilter;
let IntNullableFilter = class IntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableFilter.prototype, "not", void 0);
IntNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], IntNullableFilter);
exports.IntNullableFilter = IntNullableFilter;
let IntNullableWithAggregatesFilter = class IntNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], IntNullableWithAggregatesFilter.prototype, "_max", void 0);
IntNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], IntNullableWithAggregatesFilter);
exports.IntNullableWithAggregatesFilter = IntNullableWithAggregatesFilter;
let IntWithAggregatesFilter = class IntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], IntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], IntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntWithAggregatesFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], IntWithAggregatesFilter.prototype, "_max", void 0);
IntWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], IntWithAggregatesFilter);
exports.IntWithAggregatesFilter = IntWithAggregatesFilter;
let NestedBoolFilter = NestedBoolFilter_1 = class NestedBoolFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], NestedBoolFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolFilter_1, { nullable: true })
], NestedBoolFilter.prototype, "not", void 0);
NestedBoolFilter = NestedBoolFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedBoolFilter);
exports.NestedBoolFilter = NestedBoolFilter;
let NestedBoolNullableFilter = NestedBoolNullableFilter_1 = class NestedBoolNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], NestedBoolNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableFilter_1, { nullable: true })
], NestedBoolNullableFilter.prototype, "not", void 0);
NestedBoolNullableFilter = NestedBoolNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedBoolNullableFilter);
exports.NestedBoolNullableFilter = NestedBoolNullableFilter;
let NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter_1 = class NestedBoolNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], NestedBoolNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableWithAggregatesFilter_1, { nullable: true })
], NestedBoolNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedBoolNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableFilter, { nullable: true })
], NestedBoolNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolNullableFilter, { nullable: true })
], NestedBoolNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedBoolNullableWithAggregatesFilter);
exports.NestedBoolNullableWithAggregatesFilter = NestedBoolNullableWithAggregatesFilter;
let NestedBoolWithAggregatesFilter = NestedBoolWithAggregatesFilter_1 = class NestedBoolWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], NestedBoolWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolWithAggregatesFilter_1, { nullable: true })
], NestedBoolWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedBoolWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolFilter, { nullable: true })
], NestedBoolWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedBoolFilter, { nullable: true })
], NestedBoolWithAggregatesFilter.prototype, "_max", void 0);
NestedBoolWithAggregatesFilter = NestedBoolWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedBoolWithAggregatesFilter);
exports.NestedBoolWithAggregatesFilter = NestedBoolWithAggregatesFilter;
let NestedDateTimeFilter = NestedDateTimeFilter_1 = class NestedDateTimeFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter_1, { nullable: true })
], NestedDateTimeFilter.prototype, "not", void 0);
NestedDateTimeFilter = NestedDateTimeFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedDateTimeFilter);
exports.NestedDateTimeFilter = NestedDateTimeFilter;
let NestedDateTimeNullableFilter = NestedDateTimeNullableFilter_1 = class NestedDateTimeNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter_1, { nullable: true })
], NestedDateTimeNullableFilter.prototype, "not", void 0);
NestedDateTimeNullableFilter = NestedDateTimeNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedDateTimeNullableFilter);
exports.NestedDateTimeNullableFilter = NestedDateTimeNullableFilter;
let NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter_1 = class NestedDateTimeNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableWithAggregatesFilter_1, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeNullableFilter, { nullable: true })
], NestedDateTimeNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedDateTimeNullableWithAggregatesFilter);
exports.NestedDateTimeNullableWithAggregatesFilter = NestedDateTimeNullableWithAggregatesFilter;
let NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = class NestedDateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeWithAggregatesFilter_1, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedDateTimeFilter, { nullable: true })
], NestedDateTimeWithAggregatesFilter.prototype, "_max", void 0);
NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedDateTimeWithAggregatesFilter);
exports.NestedDateTimeWithAggregatesFilter = NestedDateTimeWithAggregatesFilter;
let NestedEnumGraderFilter = NestedEnumGraderFilter_1 = class NestedEnumGraderFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: true })
], NestedEnumGraderFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Grader], { nullable: true })
], NestedEnumGraderFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Grader], { nullable: true })
], NestedEnumGraderFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGraderFilter_1, { nullable: true })
], NestedEnumGraderFilter.prototype, "not", void 0);
NestedEnumGraderFilter = NestedEnumGraderFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedEnumGraderFilter);
exports.NestedEnumGraderFilter = NestedEnumGraderFilter;
let NestedEnumGraderWithAggregatesFilter = NestedEnumGraderWithAggregatesFilter_1 = class NestedEnumGraderWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: true })
], NestedEnumGraderWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Grader], { nullable: true })
], NestedEnumGraderWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Grader], { nullable: true })
], NestedEnumGraderWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGraderWithAggregatesFilter_1, { nullable: true })
], NestedEnumGraderWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedEnumGraderWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGraderFilter, { nullable: true })
], NestedEnumGraderWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedEnumGraderFilter, { nullable: true })
], NestedEnumGraderWithAggregatesFilter.prototype, "_max", void 0);
NestedEnumGraderWithAggregatesFilter = NestedEnumGraderWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedEnumGraderWithAggregatesFilter);
exports.NestedEnumGraderWithAggregatesFilter = NestedEnumGraderWithAggregatesFilter;
let NestedFloatFilter = NestedFloatFilter_1 = class NestedFloatFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter_1, { nullable: true })
], NestedFloatFilter.prototype, "not", void 0);
NestedFloatFilter = NestedFloatFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedFloatFilter);
exports.NestedFloatFilter = NestedFloatFilter;
let NestedFloatNullableFilter = NestedFloatNullableFilter_1 = class NestedFloatNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_6.Float], { nullable: true })
], NestedFloatNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], NestedFloatNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter_1, { nullable: true })
], NestedFloatNullableFilter.prototype, "not", void 0);
NestedFloatNullableFilter = NestedFloatNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedFloatNullableFilter);
exports.NestedFloatNullableFilter = NestedFloatNullableFilter;
let NestedIntFilter = NestedIntFilter_1 = class NestedIntFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter_1, { nullable: true })
], NestedIntFilter.prototype, "not", void 0);
NestedIntFilter = NestedIntFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntFilter);
exports.NestedIntFilter = NestedIntFilter;
let NestedIntNullableFilter = NestedIntNullableFilter_1 = class NestedIntNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter_1, { nullable: true })
], NestedIntNullableFilter.prototype, "not", void 0);
NestedIntNullableFilter = NestedIntNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntNullableFilter);
exports.NestedIntNullableFilter = NestedIntNullableFilter;
let NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter_1 = class NestedIntNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableWithAggregatesFilter_1, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedIntNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntNullableWithAggregatesFilter);
exports.NestedIntNullableWithAggregatesFilter = NestedIntNullableWithAggregatesFilter;
let NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = class NestedIntWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [graphql_4.Int], { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntWithAggregatesFilter_1, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedFloatFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedIntWithAggregatesFilter.prototype, "_max", void 0);
NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedIntWithAggregatesFilter);
exports.NestedIntWithAggregatesFilter = NestedIntWithAggregatesFilter;
let NestedStringFilter = NestedStringFilter_1 = class NestedStringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter_1, { nullable: true })
], NestedStringFilter.prototype, "not", void 0);
NestedStringFilter = NestedStringFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringFilter);
exports.NestedStringFilter = NestedStringFilter;
let NestedStringNullableFilter = NestedStringNullableFilter_1 = class NestedStringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter_1, { nullable: true })
], NestedStringNullableFilter.prototype, "not", void 0);
NestedStringNullableFilter = NestedStringNullableFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringNullableFilter);
exports.NestedStringNullableFilter = NestedStringNullableFilter;
let NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = class NestedStringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter_1, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], NestedStringNullableWithAggregatesFilter.prototype, "_max", void 0);
NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringNullableWithAggregatesFilter);
exports.NestedStringNullableWithAggregatesFilter = NestedStringNullableWithAggregatesFilter;
let NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = class NestedStringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter_1, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], NestedStringWithAggregatesFilter.prototype, "_max", void 0);
NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter_1 = __decorate([
    (0, graphql_5.InputType)()
], NestedStringWithAggregatesFilter);
exports.NestedStringWithAggregatesFilter = NestedStringWithAggregatesFilter;
let NullableBoolFieldUpdateOperationsInput = class NullableBoolFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], NullableBoolFieldUpdateOperationsInput.prototype, "set", void 0);
NullableBoolFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableBoolFieldUpdateOperationsInput);
exports.NullableBoolFieldUpdateOperationsInput = NullableBoolFieldUpdateOperationsInput;
let NullableDateTimeFieldUpdateOperationsInput = class NullableDateTimeFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], NullableDateTimeFieldUpdateOperationsInput.prototype, "set", void 0);
NullableDateTimeFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableDateTimeFieldUpdateOperationsInput);
exports.NullableDateTimeFieldUpdateOperationsInput = NullableDateTimeFieldUpdateOperationsInput;
let NullableIntFieldUpdateOperationsInput = class NullableIntFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "increment", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "decrement", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "multiply", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], NullableIntFieldUpdateOperationsInput.prototype, "divide", void 0);
NullableIntFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableIntFieldUpdateOperationsInput);
exports.NullableIntFieldUpdateOperationsInput = NullableIntFieldUpdateOperationsInput;
let NullableStringFieldUpdateOperationsInput = class NullableStringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], NullableStringFieldUpdateOperationsInput.prototype, "set", void 0);
NullableStringFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], NullableStringFieldUpdateOperationsInput);
exports.NullableStringFieldUpdateOperationsInput = NullableStringFieldUpdateOperationsInput;
let SortOrderInput = class SortOrderInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: false })
], SortOrderInput.prototype, "sort", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullsOrder, { nullable: true })
], SortOrderInput.prototype, "nulls", void 0);
SortOrderInput = __decorate([
    (0, graphql_5.InputType)()
], SortOrderInput);
exports.SortOrderInput = SortOrderInput;
let StringFieldUpdateOperationsInput = class StringFieldUpdateOperationsInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFieldUpdateOperationsInput.prototype, "set", void 0);
StringFieldUpdateOperationsInput = __decorate([
    (0, graphql_5.InputType)()
], StringFieldUpdateOperationsInput);
exports.StringFieldUpdateOperationsInput = StringFieldUpdateOperationsInput;
let StringFilter = class StringFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringFilter.prototype, "not", void 0);
StringFilter = __decorate([
    (0, graphql_5.InputType)()
], StringFilter);
exports.StringFilter = StringFilter;
let StringNullableFilter = class StringNullableFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringNullableFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableFilter.prototype, "not", void 0);
StringNullableFilter = __decorate([
    (0, graphql_5.InputType)()
], StringNullableFilter);
exports.StringNullableFilter = StringNullableFilter;
let StringNullableWithAggregatesFilter = class StringNullableWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringNullableFilter, { nullable: true })
], StringNullableWithAggregatesFilter.prototype, "_max", void 0);
StringNullableWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], StringNullableWithAggregatesFilter);
exports.StringNullableWithAggregatesFilter = StringNullableWithAggregatesFilter;
let StringWithAggregatesFilter = class StringWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true })
], StringWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "contains", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "startsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StringWithAggregatesFilter.prototype, "endsWith", void 0);
__decorate([
    (0, graphql_1.Field)(() => QueryMode, { nullable: true })
], StringWithAggregatesFilter.prototype, "mode", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringWithAggregatesFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedIntFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => NestedStringFilter, { nullable: true })
], StringWithAggregatesFilter.prototype, "_max", void 0);
StringWithAggregatesFilter = __decorate([
    (0, graphql_5.InputType)()
], StringWithAggregatesFilter);
exports.StringWithAggregatesFilter = StringWithAggregatesFilter;
let AggregateStudent = class AggregateStudent {
};
__decorate([
    (0, graphql_1.Field)(() => StudentCountAggregate, { nullable: true })
], AggregateStudent.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentAvgAggregate, { nullable: true })
], AggregateStudent.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentSumAggregate, { nullable: true })
], AggregateStudent.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMinAggregate, { nullable: true })
], AggregateStudent.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMaxAggregate, { nullable: true })
], AggregateStudent.prototype, "_max", void 0);
AggregateStudent = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateStudent);
exports.AggregateStudent = AggregateStudent;
let CreateManyStudentArgs = class CreateManyStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [StudentCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentCreateManyInput)
], CreateManyStudentArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyStudentArgs.prototype, "skipDuplicates", void 0);
CreateManyStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyStudentArgs);
exports.CreateManyStudentArgs = CreateManyStudentArgs;
let CreateOneStudentArgs = class CreateOneStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentCreateInput)
], CreateOneStudentArgs.prototype, "data", void 0);
CreateOneStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneStudentArgs);
exports.CreateOneStudentArgs = CreateOneStudentArgs;
let DeleteManyStudentArgs = class DeleteManyStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], DeleteManyStudentArgs.prototype, "where", void 0);
DeleteManyStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyStudentArgs);
exports.DeleteManyStudentArgs = DeleteManyStudentArgs;
let DeleteOneStudentArgs = class DeleteOneStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], DeleteOneStudentArgs.prototype, "where", void 0);
DeleteOneStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneStudentArgs);
exports.DeleteOneStudentArgs = DeleteOneStudentArgs;
let FindFirstStudentOrThrowArgs = class FindFirstStudentOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], FindFirstStudentOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentOrderByWithRelationInput], { nullable: true })
], FindFirstStudentOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true })
], FindFirstStudentOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstStudentOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstStudentOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentScalarFieldEnum], { nullable: true })
], FindFirstStudentOrThrowArgs.prototype, "distinct", void 0);
FindFirstStudentOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstStudentOrThrowArgs);
exports.FindFirstStudentOrThrowArgs = FindFirstStudentOrThrowArgs;
let FindFirstStudentArgs = class FindFirstStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], FindFirstStudentArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentOrderByWithRelationInput], { nullable: true })
], FindFirstStudentArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true })
], FindFirstStudentArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstStudentArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstStudentArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentScalarFieldEnum], { nullable: true })
], FindFirstStudentArgs.prototype, "distinct", void 0);
FindFirstStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstStudentArgs);
exports.FindFirstStudentArgs = FindFirstStudentArgs;
let FindManyStudentArgs = class FindManyStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], FindManyStudentArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentOrderByWithRelationInput], { nullable: true })
], FindManyStudentArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true })
], FindManyStudentArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyStudentArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyStudentArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentScalarFieldEnum], { nullable: true })
], FindManyStudentArgs.prototype, "distinct", void 0);
FindManyStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyStudentArgs);
exports.FindManyStudentArgs = FindManyStudentArgs;
let FindUniqueStudentOrThrowArgs = class FindUniqueStudentOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], FindUniqueStudentOrThrowArgs.prototype, "where", void 0);
FindUniqueStudentOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueStudentOrThrowArgs);
exports.FindUniqueStudentOrThrowArgs = FindUniqueStudentOrThrowArgs;
let FindUniqueStudentArgs = class FindUniqueStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], FindUniqueStudentArgs.prototype, "where", void 0);
FindUniqueStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueStudentArgs);
exports.FindUniqueStudentArgs = FindUniqueStudentArgs;
let StudentAggregateArgs = class StudentAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentOrderByWithRelationInput], { nullable: true })
], StudentAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true })
], StudentAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCountAggregateInput, { nullable: true })
], StudentAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentAvgAggregateInput, { nullable: true })
], StudentAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentSumAggregateInput, { nullable: true })
], StudentAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMinAggregateInput, { nullable: true })
], StudentAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMaxAggregateInput, { nullable: true })
], StudentAggregateArgs.prototype, "_max", void 0);
StudentAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], StudentAggregateArgs);
exports.StudentAggregateArgs = StudentAggregateArgs;
let StudentAvgAggregateInput = class StudentAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentAvgAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentAvgAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentAvgAggregateInput.prototype, "userId", void 0);
StudentAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentAvgAggregateInput);
exports.StudentAvgAggregateInput = StudentAvgAggregateInput;
let StudentAvgAggregate = class StudentAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], StudentAvgAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], StudentAvgAggregate.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], StudentAvgAggregate.prototype, "userId", void 0);
StudentAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], StudentAvgAggregate);
exports.StudentAvgAggregate = StudentAvgAggregate;
let StudentAvgOrderByAggregateInput = class StudentAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentAvgOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentAvgOrderByAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentAvgOrderByAggregateInput.prototype, "userId", void 0);
StudentAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentAvgOrderByAggregateInput);
exports.StudentAvgOrderByAggregateInput = StudentAvgOrderByAggregateInput;
let StudentCountAggregateInput = class StudentCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCountAggregateInput.prototype, "_all", void 0);
StudentCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCountAggregateInput);
exports.StudentCountAggregateInput = StudentCountAggregateInput;
let StudentCountAggregate = class StudentCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCountAggregate.prototype, "_all", void 0);
StudentCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], StudentCountAggregate);
exports.StudentCountAggregate = StudentCountAggregate;
let StudentCountOrderByAggregateInput = class StudentCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentCountOrderByAggregateInput.prototype, "deleted_at", void 0);
StudentCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCountOrderByAggregateInput);
exports.StudentCountOrderByAggregateInput = StudentCountOrderByAggregateInput;
let StudentCount = class StudentCount {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCount.prototype, "courses", void 0);
StudentCount = __decorate([
    (0, graphql_2.ObjectType)()
], StudentCount);
exports.StudentCount = StudentCount;
let StudentCreateManyInput = class StudentCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], StudentCreateManyInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCreateManyInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], StudentCreateManyInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentCreateManyInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCreateManyInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCreateManyInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateManyInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateManyInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateManyInput.prototype, "deleted_at", void 0);
StudentCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCreateManyInput);
exports.StudentCreateManyInput = StudentCreateManyInput;
let StudentCreateNestedOneWithoutCoursesInput = class StudentCreateNestedOneWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutCoursesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutCoursesInput)
], StudentCreateNestedOneWithoutCoursesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateOrConnectWithoutCoursesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateOrConnectWithoutCoursesInput)
], StudentCreateNestedOneWithoutCoursesInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], StudentCreateNestedOneWithoutCoursesInput.prototype, "connect", void 0);
StudentCreateNestedOneWithoutCoursesInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCreateNestedOneWithoutCoursesInput);
exports.StudentCreateNestedOneWithoutCoursesInput = StudentCreateNestedOneWithoutCoursesInput;
let StudentCreateNestedOneWithoutUserInput = class StudentCreateNestedOneWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutUserInput)
], StudentCreateNestedOneWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateOrConnectWithoutUserInput)
], StudentCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], StudentCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
StudentCreateNestedOneWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCreateNestedOneWithoutUserInput);
exports.StudentCreateNestedOneWithoutUserInput = StudentCreateNestedOneWithoutUserInput;
let StudentCreateOrConnectWithoutCoursesInput = class StudentCreateOrConnectWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], StudentCreateOrConnectWithoutCoursesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutCoursesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutCoursesInput)
], StudentCreateOrConnectWithoutCoursesInput.prototype, "create", void 0);
StudentCreateOrConnectWithoutCoursesInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCreateOrConnectWithoutCoursesInput);
exports.StudentCreateOrConnectWithoutCoursesInput = StudentCreateOrConnectWithoutCoursesInput;
let StudentCreateOrConnectWithoutUserInput = class StudentCreateOrConnectWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], StudentCreateOrConnectWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutUserInput)
], StudentCreateOrConnectWithoutUserInput.prototype, "create", void 0);
StudentCreateOrConnectWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCreateOrConnectWithoutUserInput);
exports.StudentCreateOrConnectWithoutUserInput = StudentCreateOrConnectWithoutUserInput;
let StudentCreateWithoutCoursesInput = class StudentCreateWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], StudentCreateWithoutCoursesInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCreateWithoutCoursesInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], StudentCreateWithoutCoursesInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentCreateWithoutCoursesInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCreateWithoutCoursesInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateWithoutCoursesInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateWithoutCoursesInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateWithoutCoursesInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutStudentInput, { nullable: false })
], StudentCreateWithoutCoursesInput.prototype, "user", void 0);
StudentCreateWithoutCoursesInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCreateWithoutCoursesInput);
exports.StudentCreateWithoutCoursesInput = StudentCreateWithoutCoursesInput;
let StudentCreateWithoutUserInput = class StudentCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], StudentCreateWithoutUserInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCreateWithoutUserInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], StudentCreateWithoutUserInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentCreateWithoutUserInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCreateWithoutUserInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateWithoutUserInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateWithoutUserInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateWithoutUserInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateNestedManyWithoutStudentInput, { nullable: true })
], StudentCreateWithoutUserInput.prototype, "courses", void 0);
StudentCreateWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCreateWithoutUserInput);
exports.StudentCreateWithoutUserInput = StudentCreateWithoutUserInput;
let StudentCreateInput = class StudentCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], StudentCreateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentCreateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], StudentCreateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentCreateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentCreateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentCreateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateNestedOneWithoutStudentInput, { nullable: false })
], StudentCreateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseCreateNestedManyWithoutStudentInput, { nullable: true })
], StudentCreateInput.prototype, "courses", void 0);
StudentCreateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentCreateInput);
exports.StudentCreateInput = StudentCreateInput;
let StudentGroupByArgs = class StudentGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentOrderByWithAggregationInput], { nullable: true })
], StudentGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentScalarFieldEnum], { nullable: false })
], StudentGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentScalarWhereWithAggregatesInput, { nullable: true })
], StudentGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCountAggregateInput, { nullable: true })
], StudentGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentAvgAggregateInput, { nullable: true })
], StudentGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentSumAggregateInput, { nullable: true })
], StudentGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMinAggregateInput, { nullable: true })
], StudentGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMaxAggregateInput, { nullable: true })
], StudentGroupByArgs.prototype, "_max", void 0);
StudentGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], StudentGroupByArgs);
exports.StudentGroupByArgs = StudentGroupByArgs;
let StudentGroupBy = class StudentGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], StudentGroupBy.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentGroupBy.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], StudentGroupBy.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentGroupBy.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentGroupBy.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], StudentGroupBy.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], StudentGroupBy.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentGroupBy.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCountAggregate, { nullable: true })
], StudentGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentAvgAggregate, { nullable: true })
], StudentGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentSumAggregate, { nullable: true })
], StudentGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMinAggregate, { nullable: true })
], StudentGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMaxAggregate, { nullable: true })
], StudentGroupBy.prototype, "_max", void 0);
StudentGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], StudentGroupBy);
exports.StudentGroupBy = StudentGroupBy;
let StudentMaxAggregateInput = class StudentMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregateInput.prototype, "deleted_at", void 0);
StudentMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentMaxAggregateInput);
exports.StudentMaxAggregateInput = StudentMaxAggregateInput;
let StudentMaxAggregate = class StudentMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentMaxAggregate.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentMaxAggregate.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: true })
], StudentMaxAggregate.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentMaxAggregate.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMaxAggregate.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentMaxAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentMaxAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentMaxAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentMaxAggregate.prototype, "deleted_at", void 0);
StudentMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], StudentMaxAggregate);
exports.StudentMaxAggregate = StudentMaxAggregate;
let StudentMaxOrderByAggregateInput = class StudentMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMaxOrderByAggregateInput.prototype, "deleted_at", void 0);
StudentMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentMaxOrderByAggregateInput);
exports.StudentMaxOrderByAggregateInput = StudentMaxOrderByAggregateInput;
let StudentMinAggregateInput = class StudentMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregateInput.prototype, "deleted_at", void 0);
StudentMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentMinAggregateInput);
exports.StudentMinAggregateInput = StudentMinAggregateInput;
let StudentMinAggregate = class StudentMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentMinAggregate.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentMinAggregate.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: true })
], StudentMinAggregate.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentMinAggregate.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentMinAggregate.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentMinAggregate.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentMinAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentMinAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentMinAggregate.prototype, "deleted_at", void 0);
StudentMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], StudentMinAggregate);
exports.StudentMinAggregate = StudentMinAggregate;
let StudentMinOrderByAggregateInput = class StudentMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentMinOrderByAggregateInput.prototype, "deleted_at", void 0);
StudentMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentMinOrderByAggregateInput);
exports.StudentMinOrderByAggregateInput = StudentMinOrderByAggregateInput;
let StudentNullableRelationFilter = class StudentNullableRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true })
], StudentNullableRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true })
], StudentNullableRelationFilter.prototype, "isNot", void 0);
StudentNullableRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], StudentNullableRelationFilter);
exports.StudentNullableRelationFilter = StudentNullableRelationFilter;
let StudentOrderByWithAggregationInput = class StudentOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCountOrderByAggregateInput, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentAvgOrderByAggregateInput, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMaxOrderByAggregateInput, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentMinOrderByAggregateInput, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentSumOrderByAggregateInput, { nullable: true })
], StudentOrderByWithAggregationInput.prototype, "_sum", void 0);
StudentOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], StudentOrderByWithAggregationInput);
exports.StudentOrderByWithAggregationInput = StudentOrderByWithAggregationInput;
let StudentOrderByWithRelationInput = class StudentOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserOrderByWithRelationInput, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseOrderByRelationAggregateInput, { nullable: true })
], StudentOrderByWithRelationInput.prototype, "courses", void 0);
StudentOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], StudentOrderByWithRelationInput);
exports.StudentOrderByWithRelationInput = StudentOrderByWithRelationInput;
let StudentScalarWhereWithAggregatesInput = StudentScalarWhereWithAggregatesInput_1 = class StudentScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [StudentScalarWhereWithAggregatesInput_1], { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentScalarWhereWithAggregatesInput_1], { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentScalarWhereWithAggregatesInput_1], { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolNullableWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], StudentScalarWhereWithAggregatesInput.prototype, "deleted_at", void 0);
StudentScalarWhereWithAggregatesInput = StudentScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], StudentScalarWhereWithAggregatesInput);
exports.StudentScalarWhereWithAggregatesInput = StudentScalarWhereWithAggregatesInput;
let StudentSumAggregateInput = class StudentSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentSumAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentSumAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentSumAggregateInput.prototype, "userId", void 0);
StudentSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentSumAggregateInput);
exports.StudentSumAggregateInput = StudentSumAggregateInput;
let StudentSumAggregate = class StudentSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentSumAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentSumAggregate.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentSumAggregate.prototype, "userId", void 0);
StudentSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], StudentSumAggregate);
exports.StudentSumAggregate = StudentSumAggregate;
let StudentSumOrderByAggregateInput = class StudentSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentSumOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentSumOrderByAggregateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], StudentSumOrderByAggregateInput.prototype, "userId", void 0);
StudentSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentSumOrderByAggregateInput);
exports.StudentSumOrderByAggregateInput = StudentSumOrderByAggregateInput;
let StudentUncheckedCreateNestedOneWithoutUserInput = class StudentUncheckedCreateNestedOneWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutUserInput)
], StudentUncheckedCreateNestedOneWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateOrConnectWithoutUserInput)
], StudentUncheckedCreateNestedOneWithoutUserInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], StudentUncheckedCreateNestedOneWithoutUserInput.prototype, "connect", void 0);
StudentUncheckedCreateNestedOneWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedCreateNestedOneWithoutUserInput);
exports.StudentUncheckedCreateNestedOneWithoutUserInput = StudentUncheckedCreateNestedOneWithoutUserInput;
let StudentUncheckedCreateWithoutCoursesInput = class StudentUncheckedCreateWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateWithoutCoursesInput.prototype, "deleted_at", void 0);
StudentUncheckedCreateWithoutCoursesInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedCreateWithoutCoursesInput);
exports.StudentUncheckedCreateWithoutCoursesInput = StudentUncheckedCreateWithoutCoursesInput;
let StudentUncheckedCreateWithoutUserInput = class StudentUncheckedCreateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentUncheckedCreateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], StudentUncheckedCreateWithoutUserInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentUncheckedCreateWithoutUserInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], StudentUncheckedCreateWithoutUserInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentUncheckedCreateWithoutUserInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentUncheckedCreateWithoutUserInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateWithoutUserInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateWithoutUserInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateWithoutUserInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUncheckedCreateNestedManyWithoutStudentInput, { nullable: true })
], StudentUncheckedCreateWithoutUserInput.prototype, "courses", void 0);
StudentUncheckedCreateWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedCreateWithoutUserInput);
exports.StudentUncheckedCreateWithoutUserInput = StudentUncheckedCreateWithoutUserInput;
let StudentUncheckedCreateInput = class StudentUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], StudentUncheckedCreateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentUncheckedCreateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], StudentUncheckedCreateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], StudentUncheckedCreateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], StudentUncheckedCreateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], StudentUncheckedCreateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], StudentUncheckedCreateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUncheckedCreateNestedManyWithoutStudentInput, { nullable: true })
], StudentUncheckedCreateInput.prototype, "courses", void 0);
StudentUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedCreateInput);
exports.StudentUncheckedCreateInput = StudentUncheckedCreateInput;
let StudentUncheckedUpdateManyInput = class StudentUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateManyInput.prototype, "deleted_at", void 0);
StudentUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedUpdateManyInput);
exports.StudentUncheckedUpdateManyInput = StudentUncheckedUpdateManyInput;
let StudentUncheckedUpdateOneWithoutUserNestedInput = class StudentUncheckedUpdateOneWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutUserInput)
], StudentUncheckedUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateOrConnectWithoutUserInput)
], StudentUncheckedUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpsertWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentUpsertWithoutUserInput)
], StudentUncheckedUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUncheckedUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUncheckedUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], StudentUncheckedUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateToOneWithWhereWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentUpdateToOneWithWhereWithoutUserInput)
], StudentUncheckedUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
StudentUncheckedUpdateOneWithoutUserNestedInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedUpdateOneWithoutUserNestedInput);
exports.StudentUncheckedUpdateOneWithoutUserNestedInput = StudentUncheckedUpdateOneWithoutUserNestedInput;
let StudentUncheckedUpdateWithoutCoursesInput = class StudentUncheckedUpdateWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutCoursesInput.prototype, "deleted_at", void 0);
StudentUncheckedUpdateWithoutCoursesInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedUpdateWithoutCoursesInput);
exports.StudentUncheckedUpdateWithoutCoursesInput = StudentUncheckedUpdateWithoutCoursesInput;
let StudentUncheckedUpdateWithoutUserInput = class StudentUncheckedUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUncheckedUpdateManyWithoutStudentNestedInput, { nullable: true })
], StudentUncheckedUpdateWithoutUserInput.prototype, "courses", void 0);
StudentUncheckedUpdateWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedUpdateWithoutUserInput);
exports.StudentUncheckedUpdateWithoutUserInput = StudentUncheckedUpdateWithoutUserInput;
let StudentUncheckedUpdateInput = class StudentUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUncheckedUpdateManyWithoutStudentNestedInput, { nullable: true })
], StudentUncheckedUpdateInput.prototype, "courses", void 0);
StudentUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUncheckedUpdateInput);
exports.StudentUncheckedUpdateInput = StudentUncheckedUpdateInput;
let StudentUpdateManyMutationInput = class StudentUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateManyMutationInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateManyMutationInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateManyMutationInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateManyMutationInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateManyMutationInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateManyMutationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateManyMutationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateManyMutationInput.prototype, "deleted_at", void 0);
StudentUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpdateManyMutationInput);
exports.StudentUpdateManyMutationInput = StudentUpdateManyMutationInput;
let StudentUpdateOneWithoutCoursesNestedInput = class StudentUpdateOneWithoutCoursesNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutCoursesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutCoursesInput)
], StudentUpdateOneWithoutCoursesNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateOrConnectWithoutCoursesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateOrConnectWithoutCoursesInput)
], StudentUpdateOneWithoutCoursesNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpsertWithoutCoursesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentUpsertWithoutCoursesInput)
], StudentUpdateOneWithoutCoursesNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUpdateOneWithoutCoursesNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUpdateOneWithoutCoursesNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], StudentUpdateOneWithoutCoursesNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateToOneWithWhereWithoutCoursesInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentUpdateToOneWithWhereWithoutCoursesInput)
], StudentUpdateOneWithoutCoursesNestedInput.prototype, "update", void 0);
StudentUpdateOneWithoutCoursesNestedInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpdateOneWithoutCoursesNestedInput);
exports.StudentUpdateOneWithoutCoursesNestedInput = StudentUpdateOneWithoutCoursesNestedInput;
let StudentUpdateOneWithoutUserNestedInput = class StudentUpdateOneWithoutUserNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutUserInput)
], StudentUpdateOneWithoutUserNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateOrConnectWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentCreateOrConnectWithoutUserInput)
], StudentUpdateOneWithoutUserNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpsertWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentUpsertWithoutUserInput)
], StudentUpdateOneWithoutUserNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUpdateOneWithoutUserNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUpdateOneWithoutUserNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], StudentUpdateOneWithoutUserNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateToOneWithWhereWithoutUserInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentUpdateToOneWithWhereWithoutUserInput)
], StudentUpdateOneWithoutUserNestedInput.prototype, "update", void 0);
StudentUpdateOneWithoutUserNestedInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpdateOneWithoutUserNestedInput);
exports.StudentUpdateOneWithoutUserNestedInput = StudentUpdateOneWithoutUserNestedInput;
let StudentUpdateToOneWithWhereWithoutCoursesInput = class StudentUpdateToOneWithWhereWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUpdateToOneWithWhereWithoutCoursesInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateWithoutCoursesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentUpdateWithoutCoursesInput)
], StudentUpdateToOneWithWhereWithoutCoursesInput.prototype, "data", void 0);
StudentUpdateToOneWithWhereWithoutCoursesInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpdateToOneWithWhereWithoutCoursesInput);
exports.StudentUpdateToOneWithWhereWithoutCoursesInput = StudentUpdateToOneWithWhereWithoutCoursesInput;
let StudentUpdateToOneWithWhereWithoutUserInput = class StudentUpdateToOneWithWhereWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUpdateToOneWithWhereWithoutUserInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentUpdateWithoutUserInput)
], StudentUpdateToOneWithWhereWithoutUserInput.prototype, "data", void 0);
StudentUpdateToOneWithWhereWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpdateToOneWithWhereWithoutUserInput);
exports.StudentUpdateToOneWithWhereWithoutUserInput = StudentUpdateToOneWithWhereWithoutUserInput;
let StudentUpdateWithoutCoursesInput = class StudentUpdateWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneRequiredWithoutStudentNestedInput, { nullable: true })
], StudentUpdateWithoutCoursesInput.prototype, "user", void 0);
StudentUpdateWithoutCoursesInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpdateWithoutCoursesInput);
exports.StudentUpdateWithoutCoursesInput = StudentUpdateWithoutCoursesInput;
let StudentUpdateWithoutUserInput = class StudentUpdateWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUpdateManyWithoutStudentNestedInput, { nullable: true })
], StudentUpdateWithoutUserInput.prototype, "courses", void 0);
StudentUpdateWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpdateWithoutUserInput);
exports.StudentUpdateWithoutUserInput = StudentUpdateWithoutUserInput;
let StudentUpdateInput = class StudentUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], StudentUpdateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateOneRequiredWithoutStudentNestedInput, { nullable: true })
], StudentUpdateInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseUpdateManyWithoutStudentNestedInput, { nullable: true })
], StudentUpdateInput.prototype, "courses", void 0);
StudentUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpdateInput);
exports.StudentUpdateInput = StudentUpdateInput;
let StudentUpsertWithoutCoursesInput = class StudentUpsertWithoutCoursesInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateWithoutCoursesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentUpdateWithoutCoursesInput)
], StudentUpsertWithoutCoursesInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutCoursesInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutCoursesInput)
], StudentUpsertWithoutCoursesInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUpsertWithoutCoursesInput.prototype, "where", void 0);
StudentUpsertWithoutCoursesInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpsertWithoutCoursesInput);
exports.StudentUpsertWithoutCoursesInput = StudentUpsertWithoutCoursesInput;
let StudentUpsertWithoutUserInput = class StudentUpsertWithoutUserInput {
};
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentUpdateWithoutUserInput)
], StudentUpsertWithoutUserInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateWithoutUserInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentCreateWithoutUserInput)
], StudentUpsertWithoutUserInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], StudentUpsertWithoutUserInput.prototype, "where", void 0);
StudentUpsertWithoutUserInput = __decorate([
    (0, graphql_5.InputType)()
], StudentUpsertWithoutUserInput);
exports.StudentUpsertWithoutUserInput = StudentUpsertWithoutUserInput;
let StudentWhereUniqueInput = class StudentWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentWhereUniqueInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], StudentWhereUniqueInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentWhereInput], { nullable: true })
], StudentWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentWhereInput], { nullable: true })
], StudentWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentWhereInput], { nullable: true })
], StudentWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolNullableFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRelationFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseListRelationFilter, { nullable: true })
], StudentWhereUniqueInput.prototype, "courses", void 0);
StudentWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], StudentWhereUniqueInput);
exports.StudentWhereUniqueInput = StudentWhereUniqueInput;
let StudentWhereInput = StudentWhereInput_1 = class StudentWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [StudentWhereInput_1], { nullable: true })
], StudentWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentWhereInput_1], { nullable: true })
], StudentWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [StudentWhereInput_1], { nullable: true })
], StudentWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], StudentWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], StudentWhereInput.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], StudentWhereInput.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => EnumGraderFilter, { nullable: true })
], StudentWhereInput.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringNullableFilter, { nullable: true })
], StudentWhereInput.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolNullableFilter, { nullable: true })
], StudentWhereInput.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], StudentWhereInput.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], StudentWhereInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], StudentWhereInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], StudentWhereInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserRelationFilter, { nullable: true })
], StudentWhereInput.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => CourseListRelationFilter, { nullable: true })
], StudentWhereInput.prototype, "courses", void 0);
StudentWhereInput = StudentWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], StudentWhereInput);
exports.StudentWhereInput = StudentWhereInput;
let Student = class Student {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Student.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], Student.prototype, "fullname", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Student.prototype, "phone", void 0);
__decorate([
    (0, graphql_1.Field)(() => Grader, { nullable: false })
], Student.prototype, "grade", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true, defaultValue: 'my_pict.jpg' })
], Student.prototype, "profile_pict", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true, defaultValue: false })
], Student.prototype, "is_graduate", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], Student.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Student.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], Student.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], Student.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => User, { nullable: false })
], Student.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Course], { nullable: true })
], Student.prototype, "courses", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCount, { nullable: false })
], Student.prototype, "_count", void 0);
Student = __decorate([
    (0, graphql_2.ObjectType)()
], Student);
exports.Student = Student;
let UpdateManyStudentArgs = class UpdateManyStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentUpdateManyMutationInput)
], UpdateManyStudentArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => StudentWhereInput)
], UpdateManyStudentArgs.prototype, "where", void 0);
UpdateManyStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyStudentArgs);
exports.UpdateManyStudentArgs = UpdateManyStudentArgs;
let UpdateOneStudentArgs = class UpdateOneStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentUpdateInput)
], UpdateOneStudentArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], UpdateOneStudentArgs.prototype, "where", void 0);
UpdateOneStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneStudentArgs);
exports.UpdateOneStudentArgs = UpdateOneStudentArgs;
let UpsertOneStudentArgs = class UpsertOneStudentArgs {
};
__decorate([
    (0, graphql_1.Field)(() => StudentWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentWhereUniqueInput)
], UpsertOneStudentArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentCreateInput)
], UpsertOneStudentArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => StudentUpdateInput)
], UpsertOneStudentArgs.prototype, "update", void 0);
UpsertOneStudentArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneStudentArgs);
exports.UpsertOneStudentArgs = UpsertOneStudentArgs;
let AggregateUser = class AggregateUser {
};
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], AggregateUser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserAvgAggregate, { nullable: true })
], AggregateUser.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserSumAggregate, { nullable: true })
], AggregateUser.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], AggregateUser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], AggregateUser.prototype, "_max", void 0);
AggregateUser = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateUser);
exports.AggregateUser = AggregateUser;
let CreateManyUserArgs = class CreateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => [UserCreateManyInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateManyInput)
], CreateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], CreateManyUserArgs.prototype, "skipDuplicates", void 0);
CreateManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateManyUserArgs);
exports.CreateManyUserArgs = CreateManyUserArgs;
let CreateOneUserArgs = class CreateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], CreateOneUserArgs.prototype, "data", void 0);
CreateOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], CreateOneUserArgs);
exports.CreateOneUserArgs = CreateOneUserArgs;
let DeleteManyUserArgs = class DeleteManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], DeleteManyUserArgs.prototype, "where", void 0);
DeleteManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteManyUserArgs);
exports.DeleteManyUserArgs = DeleteManyUserArgs;
let DeleteOneUserArgs = class DeleteOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], DeleteOneUserArgs.prototype, "where", void 0);
DeleteOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], DeleteOneUserArgs);
exports.DeleteOneUserArgs = DeleteOneUserArgs;
let FindFirstUserOrThrowArgs = class FindFirstUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserOrThrowArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserOrThrowArgs.prototype, "distinct", void 0);
FindFirstUserOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstUserOrThrowArgs);
exports.FindFirstUserOrThrowArgs = FindFirstUserOrThrowArgs;
let FindFirstUserArgs = class FindFirstUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindFirstUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindFirstUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindFirstUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindFirstUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindFirstUserArgs.prototype, "distinct", void 0);
FindFirstUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindFirstUserArgs);
exports.FindFirstUserArgs = FindFirstUserArgs;
let FindManyUserArgs = class FindManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], FindManyUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], FindManyUserArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], FindManyUserArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyUserArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], FindManyUserArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: true })
], FindManyUserArgs.prototype, "distinct", void 0);
FindManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindManyUserArgs);
exports.FindManyUserArgs = FindManyUserArgs;
let FindUniqueUserOrThrowArgs = class FindUniqueUserOrThrowArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserOrThrowArgs.prototype, "where", void 0);
FindUniqueUserOrThrowArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueUserOrThrowArgs);
exports.FindUniqueUserOrThrowArgs = FindUniqueUserOrThrowArgs;
let FindUniqueUserArgs = class FindUniqueUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], FindUniqueUserArgs.prototype, "where", void 0);
FindUniqueUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], FindUniqueUserArgs);
exports.FindUniqueUserArgs = FindUniqueUserArgs;
let UpdateManyUserArgs = class UpdateManyUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateManyMutationInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateManyMutationInput)
], UpdateManyUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UpdateManyUserArgs.prototype, "where", void 0);
UpdateManyUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateManyUserArgs);
exports.UpdateManyUserArgs = UpdateManyUserArgs;
let UpdateOneUserArgs = class UpdateOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpdateOneUserArgs.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpdateOneUserArgs.prototype, "where", void 0);
UpdateOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpdateOneUserArgs);
exports.UpdateOneUserArgs = UpdateOneUserArgs;
let UpsertOneUserArgs = class UpsertOneUserArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UpsertOneUserArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateInput)
], UpsertOneUserArgs.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateInput)
], UpsertOneUserArgs.prototype, "update", void 0);
UpsertOneUserArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UpsertOneUserArgs);
exports.UpsertOneUserArgs = UpsertOneUserArgs;
let UserAggregateArgs = class UserAggregateArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserAggregateArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithRelationInput], { nullable: true })
], UserAggregateArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true })
], UserAggregateArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserAggregateArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserAggregateArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserAvgAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserSumAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserAggregateArgs.prototype, "_max", void 0);
UserAggregateArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UserAggregateArgs);
exports.UserAggregateArgs = UserAggregateArgs;
let UserAvgAggregateInput = class UserAvgAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserAvgAggregateInput.prototype, "id", void 0);
UserAvgAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserAvgAggregateInput);
exports.UserAvgAggregateInput = UserAvgAggregateInput;
let UserAvgAggregate = class UserAvgAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_6.Float, { nullable: true })
], UserAvgAggregate.prototype, "id", void 0);
UserAvgAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserAvgAggregate);
exports.UserAvgAggregate = UserAvgAggregate;
let UserAvgOrderByAggregateInput = class UserAvgOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserAvgOrderByAggregateInput.prototype, "id", void 0);
UserAvgOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserAvgOrderByAggregateInput);
exports.UserAvgOrderByAggregateInput = UserAvgOrderByAggregateInput;
let UserCountAggregateInput = class UserCountAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCountAggregateInput.prototype, "_all", void 0);
UserCountAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCountAggregateInput);
exports.UserCountAggregateInput = UserCountAggregateInput;
let UserCountAggregate = class UserCountAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserCountAggregate.prototype, "_all", void 0);
UserCountAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserCountAggregate);
exports.UserCountAggregate = UserCountAggregate;
let UserCountOrderByAggregateInput = class UserCountOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserCountOrderByAggregateInput.prototype, "deleted_at", void 0);
UserCountOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCountOrderByAggregateInput);
exports.UserCountOrderByAggregateInput = UserCountOrderByAggregateInput;
let UserCreateManyInput = class UserCreateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserCreateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCreateManyInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateManyInput.prototype, "deleted_at", void 0);
UserCreateManyInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateManyInput);
exports.UserCreateManyInput = UserCreateManyInput;
let UserCreateNestedOneWithoutStudentInput = class UserCreateNestedOneWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutStudentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutStudentInput)
], UserCreateNestedOneWithoutStudentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutStudentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutStudentInput)
], UserCreateNestedOneWithoutStudentInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateNestedOneWithoutStudentInput.prototype, "connect", void 0);
UserCreateNestedOneWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateNestedOneWithoutStudentInput);
exports.UserCreateNestedOneWithoutStudentInput = UserCreateNestedOneWithoutStudentInput;
let UserCreateOrConnectWithoutStudentInput = class UserCreateOrConnectWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserCreateOrConnectWithoutStudentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutStudentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutStudentInput)
], UserCreateOrConnectWithoutStudentInput.prototype, "create", void 0);
UserCreateOrConnectWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateOrConnectWithoutStudentInput);
exports.UserCreateOrConnectWithoutStudentInput = UserCreateOrConnectWithoutStudentInput;
let UserCreateWithoutStudentInput = class UserCreateWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutStudentInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutStudentInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateWithoutStudentInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCreateWithoutStudentInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateWithoutStudentInput.prototype, "deleted_at", void 0);
UserCreateWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateWithoutStudentInput);
exports.UserCreateWithoutStudentInput = UserCreateWithoutStudentInput;
let UserCreateInput = class UserCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserCreateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserCreateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentCreateNestedOneWithoutUserInput, { nullable: true })
], UserCreateInput.prototype, "student", void 0);
UserCreateInput = __decorate([
    (0, graphql_5.InputType)()
], UserCreateInput);
exports.UserCreateInput = UserCreateInput;
let UserGroupByArgs = class UserGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserOrderByWithAggregationInput], { nullable: true })
], UserGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarFieldEnum], { nullable: false })
], UserGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserScalarWhereWithAggregatesInput, { nullable: true })
], UserGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserAvgAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserSumAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregateInput, { nullable: true })
], UserGroupByArgs.prototype, "_max", void 0);
UserGroupByArgs = __decorate([
    (0, graphql_3.ArgsType)()
], UserGroupByArgs);
exports.UserGroupByArgs = UserGroupByArgs;
let UserGroupBy = class UserGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], UserGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserGroupBy.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false })
], UserGroupBy.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], UserGroupBy.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserGroupBy.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountAggregate, { nullable: true })
], UserGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserAvgAggregate, { nullable: true })
], UserGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserSumAggregate, { nullable: true })
], UserGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinAggregate, { nullable: true })
], UserGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxAggregate, { nullable: true })
], UserGroupBy.prototype, "_max", void 0);
UserGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], UserGroupBy);
exports.UserGroupBy = UserGroupBy;
let UserMaxAggregateInput = class UserMaxAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregateInput.prototype, "deleted_at", void 0);
UserMaxAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMaxAggregateInput);
exports.UserMaxAggregateInput = UserMaxAggregateInput;
let UserMaxAggregate = class UserMaxAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserMaxAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMaxAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMaxAggregate.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMaxAggregate.prototype, "deleted_at", void 0);
UserMaxAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserMaxAggregate);
exports.UserMaxAggregate = UserMaxAggregate;
let UserMaxOrderByAggregateInput = class UserMaxOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMaxOrderByAggregateInput.prototype, "deleted_at", void 0);
UserMaxOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMaxOrderByAggregateInput);
exports.UserMaxOrderByAggregateInput = UserMaxOrderByAggregateInput;
let UserMinAggregateInput = class UserMinAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregateInput.prototype, "deleted_at", void 0);
UserMinAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMinAggregateInput);
exports.UserMinAggregateInput = UserMinAggregateInput;
let UserMinAggregate = class UserMinAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserMinAggregate.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserMinAggregate.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserMinAggregate.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserMinAggregate.prototype, "deleted_at", void 0);
UserMinAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserMinAggregate);
exports.UserMinAggregate = UserMinAggregate;
let UserMinOrderByAggregateInput = class UserMinOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserMinOrderByAggregateInput.prototype, "deleted_at", void 0);
UserMinOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserMinOrderByAggregateInput);
exports.UserMinOrderByAggregateInput = UserMinOrderByAggregateInput;
let UserOrderByWithAggregationInput = class UserOrderByWithAggregationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCountOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserAvgOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMaxOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserMinOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserSumOrderByAggregateInput, { nullable: true })
], UserOrderByWithAggregationInput.prototype, "_sum", void 0);
UserOrderByWithAggregationInput = __decorate([
    (0, graphql_5.InputType)()
], UserOrderByWithAggregationInput);
exports.UserOrderByWithAggregationInput = UserOrderByWithAggregationInput;
let UserOrderByWithRelationInput = class UserOrderByWithRelationInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserOrderByWithRelationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => SortOrderInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentOrderByWithRelationInput, { nullable: true })
], UserOrderByWithRelationInput.prototype, "student", void 0);
UserOrderByWithRelationInput = __decorate([
    (0, graphql_5.InputType)()
], UserOrderByWithRelationInput);
exports.UserOrderByWithRelationInput = UserOrderByWithRelationInput;
let UserRelationFilter = class UserRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserRelationFilter.prototype, "is", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true })
], UserRelationFilter.prototype, "isNot", void 0);
UserRelationFilter = __decorate([
    (0, graphql_5.InputType)()
], UserRelationFilter);
exports.UserRelationFilter = UserRelationFilter;
let UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = class UserScalarWhereWithAggregatesInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserScalarWhereWithAggregatesInput_1], { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
], UserScalarWhereWithAggregatesInput.prototype, "deleted_at", void 0);
UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput_1 = __decorate([
    (0, graphql_5.InputType)()
], UserScalarWhereWithAggregatesInput);
exports.UserScalarWhereWithAggregatesInput = UserScalarWhereWithAggregatesInput;
let UserSumAggregateInput = class UserSumAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserSumAggregateInput.prototype, "id", void 0);
UserSumAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserSumAggregateInput);
exports.UserSumAggregateInput = UserSumAggregateInput;
let UserSumAggregate = class UserSumAggregate {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserSumAggregate.prototype, "id", void 0);
UserSumAggregate = __decorate([
    (0, graphql_2.ObjectType)()
], UserSumAggregate);
exports.UserSumAggregate = UserSumAggregate;
let UserSumOrderByAggregateInput = class UserSumOrderByAggregateInput {
};
__decorate([
    (0, graphql_1.Field)(() => SortOrder, { nullable: true })
], UserSumOrderByAggregateInput.prototype, "id", void 0);
UserSumOrderByAggregateInput = __decorate([
    (0, graphql_5.InputType)()
], UserSumOrderByAggregateInput);
exports.UserSumOrderByAggregateInput = UserSumOrderByAggregateInput;
let UserUncheckedCreateWithoutStudentInput = class UserUncheckedCreateWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserUncheckedCreateWithoutStudentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutStudentInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutStudentInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateWithoutStudentInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserUncheckedCreateWithoutStudentInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateWithoutStudentInput.prototype, "deleted_at", void 0);
UserUncheckedCreateWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedCreateWithoutStudentInput);
exports.UserUncheckedCreateWithoutStudentInput = UserUncheckedCreateWithoutStudentInput;
let UserUncheckedCreateInput = class UserUncheckedCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserUncheckedCreateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], UserUncheckedCreateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true })
], UserUncheckedCreateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], UserUncheckedCreateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUncheckedCreateNestedOneWithoutUserInput, { nullable: true })
], UserUncheckedCreateInput.prototype, "student", void 0);
UserUncheckedCreateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedCreateInput);
exports.UserUncheckedCreateInput = UserUncheckedCreateInput;
let UserUncheckedUpdateManyInput = class UserUncheckedUpdateManyInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateManyInput.prototype, "deleted_at", void 0);
UserUncheckedUpdateManyInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateManyInput);
exports.UserUncheckedUpdateManyInput = UserUncheckedUpdateManyInput;
let UserUncheckedUpdateWithoutStudentInput = class UserUncheckedUpdateWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutStudentInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutStudentInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutStudentInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutStudentInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutStudentInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateWithoutStudentInput.prototype, "deleted_at", void 0);
UserUncheckedUpdateWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateWithoutStudentInput);
exports.UserUncheckedUpdateWithoutStudentInput = UserUncheckedUpdateWithoutStudentInput;
let UserUncheckedUpdateInput = class UserUncheckedUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => IntFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUncheckedUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUncheckedUpdateInput.prototype, "student", void 0);
UserUncheckedUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUncheckedUpdateInput);
exports.UserUncheckedUpdateInput = UserUncheckedUpdateInput;
let UserUpdateManyMutationInput = class UserUpdateManyMutationInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateManyMutationInput.prototype, "deleted_at", void 0);
UserUpdateManyMutationInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateManyMutationInput);
exports.UserUpdateManyMutationInput = UserUpdateManyMutationInput;
let UserUpdateOneRequiredWithoutStudentNestedInput = class UserUpdateOneRequiredWithoutStudentNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutStudentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutStudentInput)
], UserUpdateOneRequiredWithoutStudentNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateOrConnectWithoutStudentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserCreateOrConnectWithoutStudentInput)
], UserUpdateOneRequiredWithoutStudentNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpsertWithoutStudentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpsertWithoutStudentInput)
], UserUpdateOneRequiredWithoutStudentNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereUniqueInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereUniqueInput)
], UserUpdateOneRequiredWithoutStudentNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateToOneWithWhereWithoutStudentInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserUpdateToOneWithWhereWithoutStudentInput)
], UserUpdateOneRequiredWithoutStudentNestedInput.prototype, "update", void 0);
UserUpdateOneRequiredWithoutStudentNestedInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateOneRequiredWithoutStudentNestedInput);
exports.UserUpdateOneRequiredWithoutStudentNestedInput = UserUpdateOneRequiredWithoutStudentNestedInput;
let UserUpdateToOneWithWhereWithoutStudentInput = class UserUpdateToOneWithWhereWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpdateToOneWithWhereWithoutStudentInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutStudentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutStudentInput)
], UserUpdateToOneWithWhereWithoutStudentInput.prototype, "data", void 0);
UserUpdateToOneWithWhereWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateToOneWithWhereWithoutStudentInput);
exports.UserUpdateToOneWithWhereWithoutStudentInput = UserUpdateToOneWithWhereWithoutStudentInput;
let UserUpdateWithoutStudentInput = class UserUpdateWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutStudentInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutStudentInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutStudentInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutStudentInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutStudentInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutStudentInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateWithoutStudentInput.prototype, "deleted_at", void 0);
UserUpdateWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateWithoutStudentInput);
exports.UserUpdateWithoutStudentInput = UserUpdateWithoutStudentInput;
let UserUpdateInput = class UserUpdateInput {
};
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
], UserUpdateInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentUpdateOneWithoutUserNestedInput, { nullable: true })
], UserUpdateInput.prototype, "student", void 0);
UserUpdateInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpdateInput);
exports.UserUpdateInput = UserUpdateInput;
let UserUpsertWithoutStudentInput = class UserUpsertWithoutStudentInput {
};
__decorate([
    (0, graphql_1.Field)(() => UserUpdateWithoutStudentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserUpdateWithoutStudentInput)
], UserUpsertWithoutStudentInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserCreateWithoutStudentInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => UserCreateWithoutStudentInput)
], UserUpsertWithoutStudentInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => UserWhereInput, { nullable: true }),
    (0, class_transformer_1.Type)(() => UserWhereInput)
], UserUpsertWithoutStudentInput.prototype, "where", void 0);
UserUpsertWithoutStudentInput = __decorate([
    (0, graphql_5.InputType)()
], UserUpsertWithoutStudentInput);
exports.UserUpsertWithoutStudentInput = UserUpsertWithoutStudentInput;
let UserWhereUniqueInput = class UserWhereUniqueInput {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: true })
], UserWhereUniqueInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: true })
], UserWhereUniqueInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput], { nullable: true })
], UserWhereUniqueInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentNullableRelationFilter, { nullable: true })
], UserWhereUniqueInput.prototype, "student", void 0);
UserWhereUniqueInput = __decorate([
    (0, graphql_5.InputType)()
], UserWhereUniqueInput);
exports.UserWhereUniqueInput = UserWhereUniqueInput;
let UserWhereInput = UserWhereInput_1 = class UserWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UserWhereInput_1], { nullable: true })
], UserWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => IntFilter, { nullable: true })
], UserWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => StringFilter, { nullable: true })
], UserWhereInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => BoolFilter, { nullable: true })
], UserWhereInput.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeFilter, { nullable: true })
], UserWhereInput.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => DateTimeNullableFilter, { nullable: true })
], UserWhereInput.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => StudentNullableRelationFilter, { nullable: true })
], UserWhereInput.prototype, "student", void 0);
UserWhereInput = UserWhereInput_1 = __decorate([
    (0, graphql_5.InputType)()
], UserWhereInput);
exports.UserWhereInput = UserWhereInput;
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_4.Int, { nullable: false })
], User.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false })
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: false, defaultValue: false })
], User.prototype, "is_active", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "created_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false })
], User.prototype, "updated_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true })
], User.prototype, "deleted_at", void 0);
__decorate([
    (0, graphql_1.Field)(() => Student, { nullable: true })
], User.prototype, "student", void 0);
User = __decorate([
    (0, graphql_2.ObjectType)()
], User);
exports.User = User;
//# sourceMappingURL=index.js.map