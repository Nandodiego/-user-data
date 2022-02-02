import { shallowMount } from '@vue/test-utils';
import ModalCreateComponent from '../ModalCreateForm.vue';
import {
    mockUserObject,
    mockErrorNameUser,
    mockUserCreate,
    mockErrorSurnamesUser,
    mockErrorMail,
    mockErrorCelNull,
    mockErrorCelLength,
    mockErrorCountry,
    mockErrorTown,
    mockErrorBirth,
    mockErrorGender,
    mockErrorSon,
    mockErrorSonNegativeValues,
    mockErrorCelNegativeValues,
    eventMock
} from './__mocks__/modalCreate.mock'

describe('Modal create form component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(ModalCreateComponent, {
            propsData: {
                showAmountSon: false,
                modalCreateForm: false,
                stateNotSon: false,
                dataForm: mockUserObject,
            },
        });
    });

    it("should create modal create component", () => {
        expect(wrapper).toBeDefined();
    });

    describe('props', () => {
        it('should exists showAmountSon property', () => {
            const isShowAmountSon = wrapper.vm.showAmountSon;
            expect(isShowAmountSon).toBeFalsy();
        });

        it('should exists modalCreateForm property', () => {
            const ismodalCreateForm = wrapper.vm.modalCreateForm;
            expect(ismodalCreateForm).toBeFalsy();
        });

        it('should exists stateNotSon property', () => {
            const isstateNotSon = wrapper.vm.stateNotSon;
            expect(isstateNotSon).toBeFalsy();
        });

        it('should exists dataForm property', () => {
            const isdataForm = wrapper.vm.dataForm;
            expect(isdataForm).toEqual(mockUserObject);
        });
    });

    describe('methods/emits', () => {
        it('should emit showAmountSonCreate and hasSelectYesSon to be true and hasSelectNotSon to be false', () => {
            wrapper.vm.clickAmountSon();
            expect(wrapper.vm.$emit('showAmountSonCreate')).toBeTruthy();
            expect(wrapper.vm.hasSelectYesSon).toBeTruthy();
            expect(wrapper.vm.hasSelectNotSon).toBeFalsy();            
        });

        it('should show error when user does not enter the name', () => {
            const mockErrorMessage = "Ingrese un nombre";
            wrapper.vm.dataForm = mockErrorNameUser;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeTruthy();
            expect(wrapper.vm.nameError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        
        it('should show error when user does not enter the surnames', () => {
            const mockErrorMessage = "Ingrese un apellido";
            wrapper.vm.dataForm = mockErrorSurnamesUser;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeTruthy();
            expect(wrapper.vm.surnameError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        it('should show error when user does not enter the mail', () => {
            const mockErrorMessage = "Ingrese un correo";
            wrapper.vm.dataForm = mockErrorMail;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeTruthy();
            expect(wrapper.vm.mailError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        it('should show error when user does not enter the cel null', () => {
            const mockErrorMessage = "Ingrese un número telefónico";
            wrapper.vm.dataForm = mockErrorCelNull;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeTruthy();
            expect(wrapper.vm.celError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        it('should show error when user does not enter the cel Length', () => {
            const mockErrorMessage = "Ingrese un número telefónico";
            wrapper.vm.dataForm = mockErrorCelLength;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeTruthy();
            expect(wrapper.vm.celError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });
        
        it('should show error when user does not enter the country', () => {
            const mockErrorMessage = "Ingrese el nombre de su país";
            wrapper.vm.dataForm = mockErrorCountry;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeTruthy();
            expect(wrapper.vm.countryError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        it('should show error when user does not enter the town', () => {
            const mockErrorMessage = "Ingrese el nombre de su ciudad";
            wrapper.vm.dataForm = mockErrorTown;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeTruthy();
            expect(wrapper.vm.townError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        it('should show error when user does not enter the birth', () => {
            const mockErrorMessage = "Ingrese su fecha de nacimiento";
            wrapper.vm.dataForm = mockErrorBirth;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeTruthy();
            expect(wrapper.vm.birthError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        it('should show error when user does not enter the gender', () => {
            const mockErrorMessage = "Elija un género";
            wrapper.vm.dataForm = mockErrorGender;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeTruthy();
            expect(wrapper.vm.genderError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        it('should show error when user does not enter the son', () => {
            const mockErrorMessage = "Elija una opción";
            wrapper.vm.dataForm = mockErrorSon;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeTruthy();
            expect(wrapper.vm.sonError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });


        it('should show error when user does enter the son negative values', () => {
            const mockErrorMessage = "No se permiten valores negativos";
            wrapper.vm.dataForm = mockErrorSonNegativeValues;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeTruthy();
            expect(wrapper.vm.sonAmountError.message).toEqual(mockErrorMessage);
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });


        it('should show error when user does enter the cel negative values', () => {
            const mockErrorMessage = "No se permiten valores negativos";
            wrapper.vm.dataForm = mockErrorCelNegativeValues;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeTruthy();
            expect(wrapper.vm.celAmountError.message).toEqual(mockErrorMessage);
        });

        it('should emit showModalCreate and addUsers events', () => {
            const spyOnResetForm = jest.spyOn(wrapper.vm, 'resetForm');
            const spyOnResetFormErrors = jest.spyOn(wrapper.vm, 'resetFormErrors');
            wrapper.vm.dataForm = mockUserCreate;
            wrapper.vm.showModalCreateForm();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
            expect(wrapper.vm.$emit('showModalCreate')).toBeTruthy();
            expect(wrapper.vm.$emit('addUsers')).toBeTruthy();
            expect(spyOnResetForm).toHaveBeenCalled();
            expect(spyOnResetFormErrors).toHaveBeenCalled();
            expect(spyOnResetForm).toHaveBeenCalledTimes(1);
            expect(spyOnResetFormErrors).toHaveBeenCalledTimes(1);
        });
    
        it('It should reset the form data.', () => {
            wrapper.vm.resetForm();
            expect(wrapper.vm.hasSelectMale.state).toBeFalsy();
            expect(wrapper.vm.hasSelectFemenine.state).toBeFalsy();
            expect(wrapper.vm.hasSelectYesSon.state).toBeFalsy();
            expect(wrapper.vm.hasSelectNotSon.state).toBeFalsy();
            expect(wrapper.vm.dataForm.names).toEqual("");
            expect(wrapper.vm.dataForm.surnames).toEqual("");
            expect(wrapper.vm.dataForm.mail).toEqual("");
            expect(wrapper.vm.dataForm.cel).toEqual(null);
            expect(wrapper.vm.dataForm.country).toEqual("");
            expect(wrapper.vm.dataForm.town).toEqual("");
            expect(wrapper.vm.dataForm.birth).toEqual("");
            expect(wrapper.vm.dataForm.gender).toEqual("");
            expect(wrapper.vm.dataForm.son).toEqual("");
        });

        it('It should reset the form errors.', () => {
            wrapper.vm.resetFormErrors();
            expect(wrapper.vm.nameError.state).toBeFalsy();
            expect(wrapper.vm.surnameError.state).toBeFalsy();
            expect(wrapper.vm.mailError.state).toBeFalsy();
            expect(wrapper.vm.celError.state).toBeFalsy();
            expect(wrapper.vm.countryError.state).toBeFalsy();
            expect(wrapper.vm.townError.state).toBeFalsy();
            expect(wrapper.vm.birthError.state).toBeFalsy();
            expect(wrapper.vm.genderError.state).toBeFalsy();
            expect(wrapper.vm.sonError.state).toBeFalsy();
            expect(wrapper.vm.sonAmountError.state).toBeFalsy();
            expect(wrapper.vm.celAmountError.state).toBeFalsy();
        });

        it('should close the modal', () => {
            const spyOnResetForm = jest.spyOn(wrapper.vm, 'resetForm');
            const spyOnResetFormErrors = jest.spyOn(wrapper.vm, 'resetFormErrors');
            wrapper.vm.closeModal(eventMock);
            expect(wrapper.vm.$emit('showModalCreate')).toBeTruthy();
            expect(spyOnResetForm).toHaveBeenCalled();
            expect(spyOnResetFormErrors).toHaveBeenCalled();
            expect(spyOnResetForm).toHaveBeenCalledTimes(1);
            expect(spyOnResetFormErrors).toHaveBeenCalledTimes(1);
        });

        it('should close the modalX', () => {
            const spyOnResetForm = jest.spyOn(wrapper.vm, 'resetForm');
            const spyOnResetFormErrors = jest.spyOn(wrapper.vm, 'resetFormErrors');
            wrapper.vm.closeModalX();
            expect(wrapper.vm.$emit('showModalCreate')).toBeTruthy();
            expect(spyOnResetForm).toHaveBeenCalled();
            expect(spyOnResetFormErrors).toHaveBeenCalled();
            expect(spyOnResetForm).toHaveBeenCalledTimes(1);
            expect(spyOnResetFormErrors).toHaveBeenCalledTimes(1);
        });
    });
});