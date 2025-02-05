export type PageSection = {
    id: string;
    component: any;
    props?: Record<string, any>;
  };
  
  export class PageManager {
    private name: string;
    private readonly sections = reactive<PageSection[]>([]);
  
    constructor(initialSections: PageSection[], name: string) {
      this.name = name;
      this.sections.push(...initialSections);
    }
  
    getName(): string {
      return this.name;
    }
  
    getSections(): PageSection[] {
      return this.sections;
    }
  
    getSectionById(id: string): PageSection | undefined {
      return this.sections.find((section) => section.id === id);
    }
  
    addSection(section: PageSection): string {
      if (this.sections.find((someSection) => someSection.id === section.id)) {
        return "Section already exists";
      }
      this.sections.push(section);
      return "Section added successfully";
    }
  
    removeSection(id: string): string {
      const index = this.sections.findIndex((section) => section.id === id);
      if (index === -1) {
        return "Section does not exist";
      }
      this.sections.splice(index, 1);
      return "Section removed successfully";
    }
}