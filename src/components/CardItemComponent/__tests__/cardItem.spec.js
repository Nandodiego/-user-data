import { shallowMount } from '@vue/test-utils';
import cardItemComponent from '../CardItem.vue';

describe('card item component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(cardItemComponent, {
            propsData: {
                names: "Diego",
                surnames: "Leyton",
                mail: "algo@gmail.com",
                cel: "123",
                country: "colombia",
                town: "acacias",
                birth: "12-23-2003",
                gender: "M",
                son: "0",
                users: [],
                modal: false,
                id: "1"
            },
            data(){
                return {
                    text: false
                }
            }
        })
    });

    it("should create a card item component", () => {
        expect(wrapper).toBeDefined();
    });

    describe('props', () => {
        it('should exists names property', () => {
            const isNames = wrapper.vm.names;
            expect(isNames).toEqual('Diego');
        });

        it('should exists surnames property', () => {
            const isSurnames = wrapper.vm.surnames;
            expect(isSurnames).toEqual('Leyton');
        });

        it('should exists mail property', () => {
            const isMail = wrapper.vm.mail;
            expect(isMail).toEqual('algo@gmail.com');
        })

        it('should exists cel property', () => {
            const isCel = wrapper.vm.cel;
            expect(isCel).toEqual('123');
        })

        it('should exists country property', () => {
            const isCountry = wrapper.vm.country;
            expect(isCountry).toEqual('colombia');
        })

        it('should exists town property', () => {
            const isTown = wrapper.vm.town;
            expect(isTown).toEqual('acacias');
        })

        it('should exists birth property', () => {
            const isBirt = wrapper.vm.birth;
            expect(isBirt).toEqual('12-23-2003');
        })

        it('should exists gender property', () => {
            const isGender = wrapper.vm.gender;
            expect(isGender).toEqual('M');
        })

        it('should exists son property', () => {
            const isSon = wrapper.vm.son;
            expect(isSon).toEqual('0');
        })

        it('should exists users property', () => {
            const isUsers = wrapper.vm.users;
            expect(isUsers).toEqual([]);
        })

        it('should exists modal property', () => {
            const isModal = wrapper.vm.modal;
            expect(isModal).toBeFalsy();
        })

        it('should exists id property', () => {
            const isId = wrapper.vm.id;
            expect(isId).toEqual('1');
        })
    });

    describe('emits', () => {
        it('should exists textShow method', () => {
            wrapper.vm.textShow();
            expect(wrapper.vm.text).toBeTruthy();
        });

        it('should emit deleteCard', () => {
            wrapper.vm.deleteCard();
            expect(wrapper.vm.$emit('deleteCard')).toBeTruthy();
        });

        it('should emit showModalEdit', () => {
            wrapper.vm.showModal();
            expect(wrapper.vm.$emit('showModalEdit')).toBeTruthy();
        })

        it('should emit editUsers', () => {
            wrapper.vm.showModal();
            expect(wrapper.vm.$emit('editUsers')).toBeTruthy();
        })
    })

})


