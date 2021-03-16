# Im public folder muss folgende struktur existieren damit das Skript richti funktioniert:
# photos/
#       <Sortiernummer>_<Portfolio Name>/
#                                       small/
#                                            1.jpg
#                                            2.jpg
#                                            ...
#                                       medium/
#                                            1.jpg
#                                            2.jpg
#                                            ...
# In small & medium müssen die gleichen Filenamen existieren

Add-Type -AssemblyName System.Drawing
$scriptPath = split-path -parent $MyInvocation.MyCommand.Definition

Push-Location $scriptPath
[System.IO.DirectoryInfo]$di = [System.IO.DirectoryInfo]$scriptPath

$outputFile = "$($di.Parent.FullName)\portfolios.ts"
$photosPath = "$($di.Parent.Parent.FullName)\public\photos"
$publicPath = "$($di.Parent.Parent.FullName)\public"

$portfolios = @()

$directories = Get-ChildItem -Path $photosPath -Directory

foreach ($directory in $directories) {
    Write-Host $directory
    [string] $directoryName = $directory.Name

    $jsonItems = @()
    
    $items = Get-ChildItem -Path "$($directory.FullName)\small";

    foreach ($item in $items) {
        Write-Output $item.FullName
        $image = [System.Drawing.Image]::FromFile($item.FullName)

        $itemObjecProperty = [ordered]@{
            src = $item.FullName.Replace($publicPath, "").Replace("\", "/").Replace($item.Name, [uri]::EscapeDataString($item.Name))
            w   = $image.Width
            h   = $image.Height
        }

        $small = New-Object -TypeName psobject -Property $itemObjecProperty

        $mediumItem = $item.FullName.Replace("\small\", "\medium\")
        $image = [System.Drawing.Image]::FromFile($mediumItem)

        $itemObjecProperty = [ordered]@{
            src = $mediumItem.Replace($publicPath, "").Replace("\", "/").Replace($item.Name, [uri]::EscapeDataString($item.Name))
            w   = $image.Width
            h   = $image.Height
        }

        $medium = New-Object -TypeName psobject -Property $itemObjecProperty

        $jsonItemProperty = [ordered]@{ 
            small  = $small 
            medium = $medium
        }
    
        $jsonItem = New-Object -TypeName psobject -Property $jsonItemProperty

        $jsonItems += $jsonItem
    }

    $portfolioName = $directoryName.Substring(2);

    $objectProperty = [ordered]@{ 
        route = $portfolioName.ToLower()
        header = $portfolioName 
        items  = $jsonItems
    }

    $portfolio = New-Object -TypeName psobject -Property $objectProperty

    $portfolios += $portfolio
}

$portfoliosJson = $portfolios | ConvertTo-Json -depth 100


@"
import { Portfolio } from './portfolio';

export const portfolio: Portfolio[] = $portfoliosJson
export default portfolio;
"@ | Out-File -Encoding utf8 $outputFile
 


