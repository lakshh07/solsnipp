import { SnippetCreated as SnippetCreatedEvent, OwnershipTransferred as OwnershipTransferredEvent, StatusChanged as StatusChangedEvent } from "../generated/SolSnipp/SolSnipp";
import { Snippet } from "../generated/schema";
import { ipfs, json } from "@graphprotocol/graph-ts";

export function handleSnippetCreated(event: SnippetCreatedEvent): void {
    let snippet = new Snippet(event.params.id.toString());
    snippet.label = event.params.label;
    snippet.description = event.params.description;
    snippet.hash = event.params.hash;

    let data = ipfs.cat(event.params.hash);
    if (data) {
        let value = json.fromBytes(data).toObject();
        if (value) {
            const content = value.get("body");
            if (content) {
                let contentArray = content.toArray()
                snippet.body = new Array<string>()
                for (let i = 0; i < contentArray.length; i++) {
                    let array = snippet.body
                    array.push(contentArray[i].toString())
                    snippet.body = array

                }
            }
        }
    }

    snippet.contractType = event.params.contractType;
    snippet.status = event.params.status;
    snippet.owner = event.params.owner;
    snippet.save();
}

export function handleStatusChanged(event: StatusChangedEvent): void {
    let snippet = new Snippet(event.params.id.toString());
    snippet.status = event.params.status;
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {

}
