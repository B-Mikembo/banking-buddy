import { defineStore } from "pinia";

export const EMPTY_ARGS = 'EMPTY_ARGS' as const;

export type Dependencies = {

};

export const useStore = defineStore('appStore', {
    state: () => ({
        actions: [] as any[],
        dependencies: {} as Dependencies
    }),
    actions: {
        initialize(dependencies: Dependencies) {
            this.dependencies = dependencies
            //  ...
        },
        dispatch(action: any){
            this.actions.push(action);
        },
        getActions() {
            return this.actions;
        },
        getDispatchUseCaseArgs(useCase: any) {
            const pendingAction = this.actions.find((a) => a.type === useCase.pending.toString());

            if(!pendingAction || !pendingAction.meta) return EMPTY_ARGS;
            return pendingAction.meta.arg ?? EMPTY_ARGS;
        }
    }
});

type AppStoreWithGetActions = ReturnType<typeof useStore>;
export type AppStore = Omit<AppStoreWithGetActions, 'getActions'>;