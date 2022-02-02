import { shallowMount } from '@vue/test-utils';

import ModalCreateForm from "../../ModalComponent/ModalCreateForm.vue";
import ModalEditForm from "../../ModalComponent/ModalEditForm.vue";
import CardItemComponent from "../../CardItemComponent/CardItem.vue";
import CardComponent from "../Card.vue";

import { mockUserObject } from './__mocks__/card.mock.js';

// const mockUserObject = {
//     names: '',
//     surnames: '',
//     mail: '',
//     cel: null,
//     country: '',
//     town: '',
//     birth: '',
//     gender: '',
//     son: '',
// };

describe('sut card component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(CardComponent, {
            components: {
                ModalCreateForm,
                ModalEditForm,
                CardItemComponent
            }, 
            propsData: {
                showCard: true,
                stateModalCreateForm: false,
                stateModalEditForm: false,
                stateNotSon: false,
                users: [],
                amountSonCreate: true,
                dataForm: mockUserObject,
                dataFormEdit: mockUserObject,
                bgMale: '#cccccc',
                bgFemenine: '#ffffff',
                bgYesSon: '#ccc',
                bgNotSon: '#fff',
                hasSelectMale: true,
                hasSelectFemenine: false,
                hasSelectYesSon: true,
                hasSelectNotSon: false
            }
        });
    });

    it("should create a card component", () => {
        expect(wrapper).toBeDefined();
    });

    describe('props', () => {

        it('should exists showCard property', () => {
            const isShowcard = wrapper.vm.showCard;
            expect(isShowcard).toBeTruthy();
        });

        it('should exists stateModalCreateForm property', () => {
            const isStateModalCreateForm = wrapper.vm.stateModalCreateForm;
            expect(isStateModalCreateForm).toBeFalsy();
        });

        it('should exists stateModalEditForm property', () => {
            const isStateModalEditForm = wrapper.vm.stateModalEditForm;
            expect(isStateModalEditForm).toBeFalsy();
        });

        it('should exists stateModalEditForm property', () => {
            const isStateNotSon = wrapper.vm.stateNotSon;
            expect(isStateNotSon).toBeFalsy();
        });

        it('should exists users property', () => {
            const isUsers = wrapper.vm.users;
            expect(isUsers).toEqual([]);
        });

        it('should exists amountSonCreate property', () => {
            const isAmountSonCreate = wrapper.vm.amountSonCreate;
            expect(isAmountSonCreate).toBeTruthy();
        });

        it('should exists dataForm property', () => {
            const isDataForm = wrapper.vm.dataForm;
            expect(isDataForm).toEqual(mockUserObject);
        });

        it('should exists dataFormEdit property', () => {
            const isDataFormEdit = wrapper.vm.dataFormEdit;
            expect(isDataFormEdit).toEqual(mockUserObject);
        });

        it('should exists bgMale property', () => {
            const isBgMale = wrapper.vm.bgMale;
            expect(isBgMale).toEqual('#cccccc');
        });

        it('should exists bgFemenine property', () => {
            const isBgFemenine = wrapper.vm.bgFemenine;
            expect(isBgFemenine).toEqual('#ffffff');
        });

        it('should exists bgYesSon property', () => {
            const isBgYesSon = wrapper.vm.bgYesSon;
            expect(isBgYesSon).toEqual('#ccc');
        });

        it('should exists bgYesSon property', () => {
            const isBgNotSon = wrapper.vm.bgNotSon;
            expect(isBgNotSon).toEqual('#fff');
        });

        it('should exists hasSelectMale property', () => {
            const isHasSelectMale = wrapper.vm.hasSelectMale;
            expect(isHasSelectMale).toBeTruthy();
        });

        it('should exists hasSelectFemenine property', () => {
            const isHasSelectFemenine = wrapper.vm.hasSelectFemenine;
            expect(isHasSelectFemenine).toBeFalsy();
        });

        it('should exists hasSelectYesSon property', () => {
            const isHasSelectYesSon = wrapper.vm.hasSelectYesSon;
            expect(isHasSelectYesSon).toBeTruthy();
        });

        it('should exists hasSelectNotSon property', () => {
            const isHasSelectNotSon = wrapper.vm.hasSelectNotSon;
            expect(isHasSelectNotSon).toBeFalsy();
        });
    });

    describe('emits', () => {
        it('should emit showModalCreateForm', () => {
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.$emit('showModalCreateForm')).toBeTruthy();
        });

        it('should emit showModalEditForm', () => {
            wrapper.vm.showModalEdit();
            expect(wrapper.vm.$emit('showModalEditForm')).toBeTruthy();
        });

        it('should emit unshiftUsers', () => {
            const mockArray = [];
            wrapper.vm.unshiftUsers(mockArray);
            expect(wrapper.vm.$emit('unshiftUsers')).toBeTruthy();
        });

        it('should emit showAmountSonCreate', () => {
            wrapper.vm.showAmountCreate();
            expect(wrapper.vm.$emit('showAmountSonCreate')).toBeTruthy();
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

        it('should emit editUsers', () => {
            const mockId = '96df46c4-4e35-4d69-b5ca-f64ee08660af';
            wrapper.vm.editUsers(mockId);
            expect(wrapper.vm.$emit('editUsers')).toBeTruthy();
        });

        it('should emit deleteCard', () => {
            const mockId = '29c6cdeb-f709-458d-a393-ab4ce8043e47';
            wrapper.vm.deleteCard(mockId);
            expect(wrapper.vm.$emit('deleteCard')).toBeTruthy();
        });

        it('should emit bgYesAndNotSon', () => {
            wrapper.vm.bgYesAndNotSon();
            expect(wrapper.vm.$emit('bgYesAndNotSon')).toBeTruthy();
        });

        it('should emit bgMaleAndFemenine', () => {
            wrapper.vm.bgMaleAndFemenine();
            expect(wrapper.vm.$emit('bgMaleAndFemenine')).toBeTruthy();
        });

        it('should emit bgFemenineAndMale', () => {
            wrapper.vm.bgFemenineAndMale();
            expect(wrapper.vm.$emit('bgFemenineAndMale')).toBeTruthy();
        });

        it('should emit resetBackgrounds', () => {
            wrapper.vm.resetBackgrounds();
            expect(wrapper.vm.$emit('resetBackgrounds')).toBeTruthy();
        });

        it('should emit dataFormNotSon', () => {
            wrapper.vm.dataFormNotSon();
            expect(wrapper.vm.$emit('dataFormNotSon')).toBeTruthy();
        });

        it('should emit dataFormGenderMale', () => {
            wrapper.vm.dataFormGenderMale();
            expect(wrapper.vm.$emit('dataFormGenderMale')).toBeTruthy();
        });

        it('should emit dataFormGenderFemenine', () => {
            wrapper.vm.dataFormGenderFemenine();
            expect(wrapper.vm.$emit('dataFormGenderFemenine')).toBeTruthy();
        });

        it('should emit notShowAmountSon', () => {
            wrapper.vm.notShowAmountSon();
            expect(wrapper.vm.$emit('notShowAmountSon')).toBeTruthy();
        });

        it('should emit changeGenderFemenine', () => {
            wrapper.vm.changeGenderFemenine();
            expect(wrapper.vm.$emit('changeGenderFemenine')).toBeTruthy();
        });

        it('should emit changeGenderMale', () => {
            wrapper.vm.changeGenderMale();
            expect(wrapper.vm.$emit('changeGenderMale')).toBeTruthy();
        });

        it('should emit changeNotSon', () => {
            wrapper.vm.changeNotSon();
            expect(wrapper.vm.$emit('changeNotSon')).toBeTruthy();
        });

        it('should emit changeYesSon', () => {
            wrapper.vm.changeYesSon();
            expect(wrapper.vm.$emit('changeYesSon')).toBeTruthy();
        });

        it('should emit resetForm', () => {
            wrapper.vm.resetForm();
            expect(wrapper.vm.$emit('resetForm')).toBeTruthy();
        });
    });
})