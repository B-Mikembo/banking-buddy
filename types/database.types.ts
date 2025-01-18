export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          firstname: string
          lastname: string
          email: string
        }
        Insert: {
          id?: string
          firstname: string
          lastname: string
          email: string
        }
        Update: {
          id: string;
          firstname?: string;
          lastname?: string;
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}