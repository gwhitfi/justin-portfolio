import { pdf } from "@react-pdf/renderer";
import ResumeDocument from "./ResumeDocument";

// Loaded on demand (dynamic import) so the PDF library only downloads when someone asks for the PDF.
export async function generateResumePdf(): Promise<Blob> {
    return pdf(<ResumeDocument />).toBlob();
}
