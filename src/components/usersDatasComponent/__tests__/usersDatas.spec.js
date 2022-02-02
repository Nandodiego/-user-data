import { shallowMount } from '@vue/test-utils';
import UsersDatasComponent from "../UsersDatas.vue";
import {
    mockUserObject,
    mockArrayUsers,
    id,
    idEditUser,
    mockObjectUserEditMale,
    mockObjectUserEditFemenine,
    mockObjectUserEditEmptyGender,
    mockObjectUserEditNotSon,
    mockObjectUserEditSon,
    mockObjectUserEditSonWorthless,
    mockArrayUserGenderMale,
    mockArrayUserGenderFemenine,
    mockArrayUserEditEmptyGender,
    mockArrayUserEditNotSon,
    mockArrayUserEditSon,
    mockArrayUserEditSonWorthless
} from "./__mocks__/usersDatas.mock";

describe('Users datas component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(UsersDatasComponent, {
            data(){
                return {
                    users: [
                        {
                            id,
                            names: 're',
                            surnames: '342',
                            mail: 'dsa',
                            cel: 4,
                            country: 'dsa',
                            town: 'dsa',
                            birth: 'dsa',
                            gender: 'dsa',
                            son: 'dsa',
                        }
                    ],
                }
            }
        })
    });

    it("should create a users datas component", () => {
        expect(wrapper).toBeDefined();
    });

    describe('methods', () => {
        it('should update the state of stateText', () => {
            const status = true;
            wrapper.vm.showText(status);
            expect(wrapper.vm.stateText).toEqual(status);
        });

        it('should update the state of stateNotSon', () => {
            const status = true;
            wrapper.vm.showSon(status);
            expect(wrapper.vm.stateNotSon).toEqual(status);
        });

        it('should set the value of amountSonCreate to true', () => {
            wrapper.vm.showAmountCreate();
            expect(wrapper.vm.amountSonCreate).toBeTruthy();
        });

        it('should set the value of amountSonCreate to false', () => {
            wrapper.vm.notShowAmountSon();
            expect(wrapper.vm.amountSonCreate).toBeFalsy();
        });

        it('should update the state of stateModalEditForm', () => {
            const status = false;
            wrapper.vm.showModal(status);
            expect(wrapper.vm.stateModalEditForm).toEqual(status);
        });
        
        it('you must set the value of stateModalCreateForm to true and amountSonCreate to false', () => {
            wrapper.vm.showModalCreate();
            expect(wrapper.vm.stateModalCreateForm).toBeTruthy();
            expect(wrapper.vm.amountSonCreate).toBeFalsy();
        });

        it('should mutate the array and add an user', () => {
            wrapper.vm.userData(mockUserObject);
            expect(wrapper.vm.users).toEqual(mockArrayUsers);
        });

        it('should remove the object that matches the id of the parameter', () => {
            wrapper.vm.deleteItem(id);
            expect(wrapper.vm.users).toEqual([]);
            expect(wrapper.vm.users.length).toEqual(0);
        });

        it('should edit user array when user gender equal to M', () => {
            wrapper.vm.users = mockArrayUserGenderMale;
            wrapper.vm.editUsers(idEditUser);
            expect(wrapper.vm.dataFormEdit).toEqual(mockObjectUserEditMale);
            expect(wrapper.vm.hasSelectMale).toBeTruthy();
            expect(wrapper.vm.hasSelectNotSon).toBeFalsy();
            expect(wrapper.vm.hasSelectYesSon).toBeFalsy();
        });

        it('should edit user array when user gender equal to F', () => { 
            wrapper.vm.users = mockArrayUserGenderFemenine;
            wrapper.vm.editUsers(idEditUser);
            expect(wrapper.vm.dataFormEdit).toEqual(mockObjectUserEditFemenine);
            expect(wrapper.vm.hasSelectFemenine).toBeTruthy();
            expect(wrapper.vm.hasSelectNotSon).toBeTruthy();
        });

        it('should edit user array when user gender value equal to empty', () => {
            wrapper.vm.users = mockArrayUserEditEmptyGender;
            wrapper.vm.editUsers(idEditUser);
            expect(wrapper.vm.dataFormEdit).toEqual(mockObjectUserEditEmptyGender);
            expect(wrapper.vm.hasSelectMale).toBeFalsy();
            expect(wrapper.vm.hasSelectFemenine).toBeFalsy();
            expect(wrapper.vm.amountSonCreate).toBeTruthy();
            expect(wrapper.vm.hasSelectYesSon).toBeTruthy();
        });

        it('should edit user array when user  son value equal to No', () => {
            wrapper.vm.users = mockArrayUserEditNotSon;
            wrapper.vm.editUsers(idEditUser);
            expect(wrapper.vm.dataFormEdit).toEqual(mockObjectUserEditNotSon);
            expect(wrapper.vm.hasSelectMale).toBeFalsy();
            expect(wrapper.vm.hasSelectFemenine).toBeFalsy();
            expect(wrapper.vm.hasSelectNotSon).toBeTruthy();
        });

        it('should edit user array when user son value equal to number', () => {
            wrapper.vm.users = mockArrayUserEditSon;
            wrapper.vm.editUsers(idEditUser);
            expect(wrapper.vm.dataFormEdit).toEqual(mockObjectUserEditSon);
            expect(wrapper.vm.hasSelectMale).toBeFalsy();
            expect(wrapper.vm.hasSelectFemenine).toBeFalsy();
            expect(wrapper.vm.amountSonCreate).toBeTruthy();
            expect(wrapper.vm.hasSelectYesSon).toBeTruthy();
        });

        it('you must edit the user array when the value of the child of the user is empty', () => {
            wrapper.vm.users = mockArrayUserEditSonWorthless;
            wrapper.vm.editUsers(idEditUser);
            expect(wrapper.vm.dataFormEdit).toEqual(mockObjectUserEditSonWorthless);
            expect(wrapper.vm.hasSelectMale).toBeFalsy();
            expect(wrapper.vm.hasSelectFemenine).toBeFalsy();
            expect(wrapper.vm.hasSelectNotSon).toBeFalsy();
            expect(wrapper.vm.hasSelectYesSon).toBeFalsy();
        });

        it('should execute resetForm method', () => {
            wrapper.vm.resetForm();
            expect(wrapper.vm.hasSelectYesSon).toBeFalsy();
            expect(wrapper.vm.hasSelectNotSon).toBeFalsy();
            expect(wrapper.vm.hasSelectMale).toBeFalsy();
            expect(wrapper.vm.hasSelectFemenine).toBeFalsy();
        });

        it('should execute changeGenderMale method', () => {
            wrapper.vm.changeGenderMale();
            expect(wrapper.vm.hasSelectMale).toBeFalsy();
            expect(wrapper.vm.hasSelectFemenine).toBeTruthy();
        });

        it('should execute changeGenderFemenine method', () => {
            wrapper.vm.changeGenderFemenine();
            expect(wrapper.vm.hasSelectFemenine).toBeFalsy();
            expect(wrapper.vm.hasSelectMale).toBeTruthy();
        });

        it('should execute changeNotSon method', () => {
            wrapper.vm.changeNotSon();
            expect(wrapper.vm.hasSelectNotSon).toBeFalsy();
            expect(wrapper.vm.hasSelectYesSon).toBeTruthy();
        });

        it('should execute changeYesSon method', () => {
            wrapper.vm.changeYesSon();
            expect(wrapper.vm.hasSelectYesSon).toBeFalsy();
            expect(wrapper.vm.hasSelectNotSon).toBeTruthy();
        });
    });
});