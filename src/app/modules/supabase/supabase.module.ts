import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupabaseService } from './services/supabase.service';

@NgModule({
    declarations: [],
    providers: [SupabaseService],
    imports: [CommonModule],
})
export class SupabaseModule {}
