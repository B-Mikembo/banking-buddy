import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/vue';
import PasswordInput from '~/components/PasswordInput.vue';

describe('PasswordInput', () => {
  describe('at least 1 digit', () => {
    it('have message--info class when password does not have digit', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: 'PasswordWithoutNumber!',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('1 chiffre minimum');

      expect(messageElement.className).toContain('message--info');
    });

    it('have message--valid class when password has digit', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: 'Password1!',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('1 chiffre minimum');

      expect(messageElement.className).toContain('message--valid');
    });
  });
  describe('at least one special character', () => {
    it('have message--info class when password does not contain special character', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: 'Password',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('1 caractère spécial minimum');

      expect(messageElement.className).toContain('message--info');
    });
    it('have message--valid class when password contain special character', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: 'Password1!',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('1 caractère spécial minimum');

      expect(messageElement.className).toContain('message--valid');
    });
  });
  describe('at least 12 characters', () => {
    it('have message--info class when password does not have at least 12 characters', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: 'Password',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('12 caractères minimum');

      expect(messageElement.className).toContain('message--info');
    });
    it('have message--valid class when password has at least 12 characters', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: 'Password123456!',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('12 caractères minimum');

      expect(messageElement.className).toContain('message--valid');
    });
  });
  describe('at least 1 upper case and 1 lower case', () => {
    it('have message--info class when password does not contain upper case', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: 'password',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('Au moins 1 majuscule et 1 minuscule');

      expect(messageElement.className).toContain('message--info');
    });
    it('have message--info class when password does not contain lower case', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: '123PASSWORD!',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('Au moins 1 majuscule et 1 minuscule');

      expect(messageElement.className).toContain('message--info');
    });
    it('have message--valid class when password contain upper and lower case', () => {
      const { getByText } = render(PasswordInput as unknown as { props: { modelValue: string } }, {
        props: {
          modelValue: 'Password',
          legende: 'Votre mot de passe doit contenir :',
        },
      });

      const messageElement = getByText('Au moins 1 majuscule et 1 minuscule');

      expect(messageElement.className).toContain('message--valid');
    });
  });
});
