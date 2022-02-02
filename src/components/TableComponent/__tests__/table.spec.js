import { shallowMount } from '@vue/test-utils';
import tableComponent from '../Table.vue';
import {mockUserObject} from './__mocks__/table.mock.js';


describe('table component', () => {
    
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(tableComponent, {
            propsData: {
                users: [],
                stateModalCreateForm: false,
                stateModalEditForm: false,
                amountSonCreate: false,
                stateNotSon: true,
                dataForm: mockUserObject,
                dataFormEdit: mockUserObject,
                hasSelectMale: true,
                hasSelectFemenine: true,
                hasSelectYesSon: false,
                hasSelectNotSon: false
            }
        });
    });

    it("should create a table component", () => {
        expect(wrapper).toBeDefined();
    });

    describe('props', () => {
        it('should exists users property', () => {
            const isUsers = wrapper.vm.users;
            expect(isUsers).toEqual([]);
        });

        it('should exists stateModalCreateForm property', () => {
            const isStateModalCreateForm = wrapper.vm.stateModalCreateForm;
            expect(isStateModalCreateForm).toBeFalsy();
        });

        it('should exists stateModalEditForm property', () => {
            const isStateModalEditForm = wrapper.vm.stateModalEditForm;
            expect(isStateModalEditForm).toBeFalsy();
        });

        it('should exists amountSonCreate property', () => {
            const isAmountSonCreate = wrapper.vm.amountSonCreate;
            expect(isAmountSonCreate).toBeFalsy();
        });

        it('should exists stateNotSon property', () => {
            const isStateNotSon = wrapper.vm.stateNotSon;
            expect(isStateNotSon).toBeTruthy();
        });

        it('should exists dataForm property', () => {
            const isDataForm = wrapper.vm.dataForm;
            expect(isDataForm).toEqual(mockUserObject);
        });

        it('should exists dataFormEdit property', () => {
            const isDataFormEdit = wrapper.vm.dataFormEdit;
            expect(isDataFormEdit).toEqual(mockUserObject);
        });

        it('should exists hasSelectMale property', () => {
            const isHasSelectMale = wrapper.vm.hasSelectMale;
            expect(isHasSelectMale).toBeTruthy();
        });

        it('should exists hasSelectFemenine property', () => {
            const isHasSelectFemenine = wrapper.vm.hasSelectFemenine;
            expect(isHasSelectFemenine).toBeTruthy();
        });

        it('should exists hasSelectYesSon property', () => {
            const isHasSelectYesSon = wrapper.vm.hasSelectYesSon;
            expect(isHasSelectYesSon).toBeFalsy();
        });

        it('should exists hasSelectNotSon property', () => {
            const isHasSelectNotSon = wrapper.vm.hasSelectNotSon;
            expect(isHasSelectNotSon).toBeFalsy();
        });
    });

    describe('emits', () => {
        it('should emit showAmountCreate', () => {
            wrapper.vm.showAmountCreate();
            expect(wrapper.vm.$emit('showAmountCreate')).toBeTruthy();
        });

        it('should emit showModalCreate', () => {
            wrapper.vm.showModalCreate();
            expect(wrapper.vm.$emit('showModalCreate')).toBeTruthy();
        });

        it('should emit userData', () => {
            const mockArray = [];
            wrapper.vm.userData(mockArray);
            expect(wrapper.vm.$emit('userData')).toBeTruthy();
        });

        it('should emit deleteCard', () => {
            const mockId = '96df46c4-4e35-4d69-b5ca-f64ee08660af';
            wrapper.vm.deleteCard(mockId);
            expect(wrapper.vm.$emit('deleteCard')).toBeTruthy();
        });

        it('should emit showModalEditForm', () => {
            wrapper.vm.showModalEditForm();
            expect(wrapper.vm.$emit('showModalEditForm')).toBeTruthy();
        });

        it('should emit editUsers', () => {
            const mockId = '96df46c4-4e35-4d69-b5ca-f64ee08660af';
            wrapper.vm.editUsers(mockId);
            expect(wrapper.vm.$emit('editUsers')).toBeTruthy();
        });

        it('should emit resetForm', () => {
            wrapper.vm.resetForm();
            expect(wrapper.vm.$emit('resetForm')).toBeTruthy();
        });

        it('should emit changeGenderMale', () => {
            wrapper.vm.changeGenderMale();
            expect(wrapper.vm.$emit('changeGenderMale')).toBeTruthy();
        });

        it('should emit changeGenderFemenine', () => {
            wrapper.vm.changeGenderFemenine();
            expect(wrapper.vm.$emit('changeGenderFemenine')).toBeTruthy();
        });

        it('should emit changeNotSon', () => {
            wrapper.vm.changeNotSon();
            expect(wrapper.vm.$emit('changeNotSon')).toBeTruthy();
        });

        it('should emit changeYesSon', () => {
            wrapper.vm.changeYesSon();
            expect(wrapper.vm.$emit('changeYesSon')).toBeTruthy();
        });

        it('should emit notShowAmountSon', () => {
            wrapper.vm.notShowAmountSon();
            expect(wrapper.vm.$emit('notShowAmountSon')).toBeTruthy();
        });

    })
});