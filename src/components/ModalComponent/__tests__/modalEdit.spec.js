import { shallowMount } from '@vue/test-utils';
import ModalEditComponent from '../ModalEditForm.vue';
import {
    mockUserObject,
    mockErrorSon,
    mockErrorSonNegative,
    mockUserCreate,
    eventMock
} from './__mocks__/modalEdit.mock';

describe('Modal edit form component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(ModalEditComponent, {
            propsData: {
                showAmountSon: false,
                modalEditForm: false,
                stateNotSon: false,
                dataForm: mockUserObject
            }
        });
    });

    it("should create a modal edit component", () => {
        expect(wrapper).toBeDefined();
    });

    describe('props', () => {
        it('should exist showAmountSon property', () => {
            const isShowAmountSon = wrapper.vm.showAmountSon;
            expect(isShowAmountSon).toBeFalsy();
        });

        it('should exist modalEditForm property', () => {
            const isModalEditForm = wrapper.vm.modalEditForm;
            expect(isModalEditForm).toBeFalsy();
        });

        it('should exist stateNotSon property', () => {
            const isStateNotSon = wrapper.vm.stateNotSon;
            expect(isStateNotSon).toBeFalsy();
        });

        it('should exist dataForm property', () => {
            const isDataForm = wrapper.vm.dataForm;
            expect(isDataForm).toEqual(mockUserObject);
        });
    });

    describe('methods/emits', () => {
        it('should issue showAmountSonEdit, changeNotSon and empty the dataForm.son property', () => {
            wrapper.vm.clickAmountSon();
            expect(wrapper.vm.$emit('showAmountSonEdit')).toBeTruthy();
            expect(wrapper.vm.$emit('changeNotSon')).toBeTruthy();
            expect(wrapper.vm.dataForm.son).toEqual("");
        }); 

        it('should add No to dataForm.son, issue notShowAmountSon and changeYesSon', () => {
            wrapper.vm.notSon();
            expect(wrapper.vm.dataForm.son).toEqual("No");
            expect(wrapper.vm.$emit('notShowAmountSon')).toBeTruthy();
            expect(wrapper.vm.$emit('changeYesSon')).toBeTruthy();
        });

        it('should add M to dataForm.gender and issue changeGenderFemenine', () => {
            wrapper.vm.clickMale();
            expect(wrapper.vm.dataForm.gender).toEqual("M");
            expect(wrapper.vm.$emit('changeGenderFemenine')).toBeTruthy();
        });

        it('should add F to dataForm.gender and issue changeGenderMale', () => {
            wrapper.vm.clickFemenine();
            expect(wrapper.vm.dataForm.gender).toEqual("F");
            expect(wrapper.vm.$emit('changeGenderMale')).toBeTruthy();
        });

        it('should show an error when the user does not enter the number of sons', () => {
            const mockErrorMessage = "Elija una opción";
            wrapper.vm.dataForm = mockErrorSon;
            wrapper.vm.showModalEditForm();
            expect(wrapper.vm.sonError.state).toBeTruthy();
            expect(wrapper.vm.sonError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
        });

        it('should show error when user does  enter the son negative values', () => {
            const mockErrorMessage = "No se permiten valores negativos";
            wrapper.vm.dataForm = mockErrorSonNegative;
            wrapper.vm.showModalEditForm();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeTruthy();
            expect(wrapper.vm.sonAmountError.message).toEqual(mockErrorMessage);
        });

        it('should emit editUsers and showModalEdit events', () => {
            const spyOnResetForm = jest.spyOn(wrapper.vm, 'resetForm');
            const spyOnResetFormErrors = jest.spyOn(wrapper.vm, 'resetFormErrors');
            wrapper.vm.dataForm = mockUserCreate;
            wrapper.vm.showModalEditForm();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.$emit('editUsers')).toBeTruthy();
            expect(wrapper.vm.$emit('showModalEdit')).toBeTruthy();
            expect(spyOnResetForm).toHaveBeenCalled();
            expect(spyOnResetFormErrors).toHaveBeenCalled();
            expect(spyOnResetForm).toHaveBeenCalledTimes(1);
            expect(spyOnResetFormErrors).toHaveBeenCalledTimes(1);
        });

        it('should emit resetForm event', () => {
            wrapper.vm.resetForm();
            expect(wrapper.vm.$emit('resetForm')).toBeTruthy();
        })

        it('should change the state of sonAmountError to false', () => {
            wrapper.vm.resetFormErrors();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
        })

        it('should close the modal', () => {
            const spyOnResetForm = jest.spyOn(wrapper.vm, 'resetForm');
            const spyOnResetFormErrors = jest.spyOn(wrapper.vm, 'resetFormErrors');
            wrapper.vm.closeModal(eventMock);
            expect(wrapper.vm.$emit('showModalEdit')).toBeTruthy();
            expect(spyOnResetForm).toHaveBeenCalled()
            expect(spyOnResetFormErrors).toHaveBeenCalled();
            expect(spyOnResetForm).toHaveBeenCalledTimes(1);
            expect(spyOnResetFormErrors).toHaveBeenCalledTimes(1);
        });

        it('should close the modalX', () => {
            const spyOnResetForm = jest.spyOn(wrapper.vm, 'resetForm');
            const spyOnResetFormErrors = jest.spyOn(wrapper.vm, 'resetFormErrors');
            wrapper.vm.closeModalX();
            expect(wrapper.vm.$emit('showModalEdit')).toBeTruthy();
            expect(spyOnResetForm).toHaveBeenCalled()
            expect(spyOnResetFormErrors).toHaveBeenCalled();
            expect(spyOnResetForm).toHaveBeenCalledTimes(1);
            expect(spyOnResetFormErrors).toHaveBeenCalledTimes(1);
        });
    });
});