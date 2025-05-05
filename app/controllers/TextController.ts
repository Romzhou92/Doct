export class TextController {
    public static formatText(text: string): string {
        if (!text) return '';
        return text.trim().toUpperCase();
    }
    public static formatDate(Date: Date): string {
        return Date.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
}
